import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { ItemsApi, type ItemResponse } from '../../api/items.api';

@Component({
  selector: 'app-items-page',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <header class="header">
        <h1>Items</h1>
      </header>

      <section class="card">
        <h2>Novo item</h2>
        <form [formGroup]="form" (ngSubmit)="create()">
          <input placeholder="Nome" formControlName="name" />
          <input placeholder="Descrição (opcional)" formControlName="description" />
          <button type="submit" [disabled]="form.invalid || loading()">Criar</button>
        </form>
      </section>

      @if (selected(); as sel) {
        <section class="card detail">
          <div class="row">
            <h2>Editar item</h2>
            <button type="button" class="secondary" (click)="clearSelection()" [disabled]="loading()">
              Fechar
            </button>
          </div>
          <p class="muted">ID: {{ sel.id }} · Owner: {{ sel.ownerId }}</p>
          <form [formGroup]="editForm" (ngSubmit)="saveEdit()">
            <input placeholder="Nome" formControlName="name" />
            <input placeholder="Descrição (opcional)" formControlName="description" />
            <button type="submit" [disabled]="editForm.invalid || loading()">Salvar</button>
          </form>
        </section>
      }

      <section class="card">
        <div class="row">
          <h2>Lista</h2>
          <button type="button" (click)="reload()" [disabled]="loading()">Recarregar</button>
        </div>

        @if (error()) {
          <p class="error">{{ error() }}</p>
        }

        <ul class="list">
          @for (item of items(); track item.id) {
            <li class="item" [class.selected]="selected()?.id === item.id">
              <div class="meta">
                <strong>{{ item.name }}</strong>
                <small>ID: {{ item.id }}</small>
                <small>Owner: {{ item.ownerId }}</small>
              </div>
              <div class="actions">
                <button type="button" class="secondary" (click)="openEdit(item.id)" [disabled]="loading()">
                  Editar
                </button>
                <button type="button" class="danger" (click)="remove(item.id)" [disabled]="loading()">Excluir</button>
              </div>
            </li>
          }
        </ul>
      </section>
    </div>
  `,
  styles: [
    `
      .page {
        max-width: 920px;
        margin: 24px auto;
        padding: 0 16px;
        display: grid;
        gap: 16px;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .card {
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 16px;
        background: #fff;
      }
      form {
        display: grid;
        grid-template-columns: 1fr 1fr auto;
        gap: 10px;
        align-items: center;
      }
      input {
        padding: 10px 12px;
        border: 1px solid #d1d5db;
        border-radius: 10px;
      }
      button {
        padding: 10px 12px;
        border: 0;
        border-radius: 10px;
        background: #111827;
        color: #fff;
        cursor: pointer;
      }
      button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }
      .error {
        color: #b91c1c;
      }
      .list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 10px;
      }
      .item {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        border: 1px solid #f3f4f6;
        border-radius: 12px;
        padding: 12px;
      }
      .meta {
        display: grid;
        gap: 2px;
      }
      .meta small {
        color: #6b7280;
      }
      .danger {
        background: #b91c1c;
      }
      .secondary {
        background: #374151;
      }
      .actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      .item.selected {
        border-color: #93c5fd;
        background: #eff6ff;
      }
      .muted {
        margin: 0 0 12px;
        color: #6b7280;
        font-size: 0.875rem;
      }
      .detail form {
        margin-top: 8px;
      }
    `
  ]
})
export class ItemsPage {
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly items = signal<ItemResponse[]>([]);
  /** Item carregado via GET (detalhe + edição). */
  readonly selected = signal<ItemResponse | null>(null);

  private readonly api = inject(ItemsApi);
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(200)]],
    description: ['']
  });

  readonly editForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(200)]],
    description: ['']
  });

  constructor() {
    this.reload();
  }

  reload() {
    this.loading.set(true);
    this.error.set(null);
    this.api.list().subscribe({
      next: (items) => {
        this.items.set(items);
        this.loading.set(false);
        const sel = this.selected();
        if (sel) {
          const still = items.find((i) => i.id === sel.id);
          if (!still) {
            this.clearSelection();
          }
        }
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Falha ao carregar items (verifique login/API).');
      }
    });
  }

  openEdit(id: string) {
    this.loading.set(true);
    this.error.set(null);
    this.api.get(id).subscribe({
      next: (item) => {
        this.selected.set(item);
        this.editForm.reset({
          name: item.name,
          description: item.description ?? ''
        });
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Falha ao carregar o item.');
      }
    });
  }

  clearSelection(): void {
    this.selected.set(null);
    this.editForm.reset({ name: '', description: '' });
  }

  saveEdit() {
    const item = this.selected();
    if (!item || this.editForm.invalid) return;
    this.loading.set(true);
    this.error.set(null);
    const v = this.editForm.getRawValue();
    this.api
      .update(item.id, { name: v.name, description: v.description ? v.description : null })
      .subscribe({
        next: (updated) => {
          this.selected.set(updated);
          this.reload();
        },
        error: () => {
          this.loading.set(false);
          this.error.set('Falha ao atualizar item.');
        }
      });
  }

  create() {
    if (this.form.invalid) return;
    this.loading.set(true);
    this.error.set(null);
    const payload = this.form.getRawValue();

    this.api.create({ name: payload.name, description: payload.description || null }).subscribe({
      next: () => {
        this.form.reset({ name: '', description: '' });
        this.reload();
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Falha ao criar item.');
      }
    });
  }

  remove(id: string) {
    this.loading.set(true);
    this.error.set(null);
    this.api.delete(id).subscribe({
      next: () => {
        if (this.selected()?.id === id) {
          this.clearSelection();
        }
        this.reload();
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Falha ao excluir item.');
      }
    });
  }
}

