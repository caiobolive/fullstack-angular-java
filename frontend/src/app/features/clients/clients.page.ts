import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { ClientsApi, type ClientResponse } from '../../api/clients.api';

@Component({
  selector: 'app-clients-page',
  imports: [ReactiveFormsModule, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <header class="header">
        <h1>Clientes</h1>
        <p class="muted">Cadastro com formulários reativos e validações.</p>
      </header>

      <section class="card">
        <h2>Novo cliente</h2>
        <form class="form-grid" [formGroup]="form" (ngSubmit)="create()">
          <label>
            <span>Nome *</span>
            <input type="text" formControlName="name" autocomplete="name" />
            @if (showErr(form.controls.name)) {
              <small class="field-error">{{ errMsg(form.controls.name, 'Nome') }}</small>
            }
          </label>
          <label>
            <span>E-mail *</span>
            <input type="email" formControlName="email" autocomplete="email" />
            @if (showErr(form.controls.email)) {
              <small class="field-error">{{ errMsg(form.controls.email, 'E-mail') }}</small>
            }
          </label>
          <label>
            <span>Telefone *</span>
            <input type="text" formControlName="phone" autocomplete="tel" />
            @if (showErr(form.controls.phone)) {
              <small class="field-error">{{ errMsg(form.controls.phone, 'Telefone') }}</small>
            }
          </label>
          <label>
            <span>CPF ou CNPJ *</span>
            <input type="text" formControlName="document" />
            @if (showErr(form.controls.document)) {
              <small class="field-error">{{ errMsg(form.controls.document, 'Documento') }}</small>
            }
          </label>
          <div class="actions-row">
            <button type="submit" [disabled]="form.invalid || loading()">Cadastrar</button>
          </div>
        </form>
      </section>

      @if (selected(); as sel) {
        <section class="card detail">
          <div class="row">
            <h2>Editar cliente</h2>
            <button type="button" class="secondary" (click)="clearSelection()" [disabled]="loading()">
              Fechar
            </button>
          </div>
          <p class="muted">
            ID: {{ sel.id }} · Atualizado em {{ sel.updatedAt | date: 'short' }}
          </p>
          <form class="form-grid" [formGroup]="editForm" (ngSubmit)="saveEdit()">
            <label>
              <span>Nome *</span>
              <input type="text" formControlName="name" />
              @if (showErr(editForm.controls.name)) {
                <small class="field-error">{{ errMsg(editForm.controls.name, 'Nome') }}</small>
              }
            </label>
            <label>
              <span>E-mail *</span>
              <input type="email" formControlName="email" />
              @if (showErr(editForm.controls.email)) {
                <small class="field-error">{{ errMsg(editForm.controls.email, 'E-mail') }}</small>
              }
            </label>
            <label>
              <span>Telefone *</span>
              <input type="text" formControlName="phone" />
              @if (showErr(editForm.controls.phone)) {
                <small class="field-error">{{ errMsg(editForm.controls.phone, 'Telefone') }}</small>
              }
            </label>
            <label>
              <span>CPF ou CNPJ *</span>
              <input type="text" formControlName="document" />
              @if (showErr(editForm.controls.document)) {
                <small class="field-error">{{ errMsg(editForm.controls.document, 'Documento') }}</small>
              }
            </label>
            <div class="actions-row">
              <button type="submit" [disabled]="editForm.invalid || loading()">Salvar</button>
            </div>
          </form>
        </section>
      }

      <section class="card">
        <div class="row">
          <h2>Lista</h2>
          <button type="button" class="secondary" (click)="reload()" [disabled]="loading()">Recarregar</button>
        </div>

        @if (error()) {
          <p class="error">{{ error() }}</p>
        }

        <ul class="list">
          @for (c of clients(); track c.id) {
            <li class="item" [class.selected]="selected()?.id === c.id">
              <div class="meta">
                <strong>{{ c.name }}</strong>
                <small>{{ c.email }} · {{ c.phone }}</small>
                <small>Doc: {{ c.document }}</small>
                <small>Criado {{ c.createdAt | date: 'short' }} · Atualizado {{ c.updatedAt | date: 'short' }}</small>
                <small class="dim">Owner: {{ c.ownerId }}</small>
              </div>
              <div class="actions">
                <button type="button" class="secondary" (click)="openEdit(c.id)" [disabled]="loading()">
                  Editar
                </button>
                <button type="button" class="danger" (click)="remove(c.id)" [disabled]="loading()">
                  Excluir
                </button>
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
        max-width: 960px;
        margin: 24px auto;
        padding: 0 16px;
        display: grid;
        gap: 16px;
      }
      .header .muted {
        margin: 4px 0 0;
        color: #6b7280;
        font-size: 0.9rem;
      }
      .card {
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 16px;
        background: #fff;
      }
      .form-grid {
        display: grid;
        gap: 12px;
        margin-top: 8px;
      }
      label span {
        display: block;
        font-size: 0.85rem;
        margin-bottom: 4px;
        color: #374151;
      }
      input {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #d1d5db;
        border-radius: 10px;
        box-sizing: border-box;
      }
      .actions-row {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      button {
        padding: 10px 14px;
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
      .field-error {
        display: block;
        color: #b91c1c;
        margin-top: 4px;
        font-size: 0.8rem;
      }
      .list {
        list-style: none;
        padding: 0;
        margin: 12px 0 0;
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
        flex-wrap: wrap;
      }
      .meta {
        display: grid;
        gap: 4px;
        min-width: 200px;
      }
      .meta small {
        color: #4b5563;
      }
      .meta .dim {
        color: #9ca3af;
        font-size: 0.75rem;
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
        align-items: flex-start;
      }
      .item.selected {
        border-color: #93c5fd;
        background: #eff6ff;
      }
      .detail .muted {
        margin: 0 0 12px;
        color: #6b7280;
        font-size: 0.875rem;
      }
    `
  ]
})
export class ClientsPage {
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly clients = signal<ClientResponse[]>([]);
  readonly selected = signal<ClientResponse | null>(null);

  private readonly api = inject(ClientsApi);
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(200)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(320)]],
    phone: ['', [Validators.required, Validators.maxLength(30)]],
    document: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(18)]]
  });

  readonly editForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(200)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(320)]],
    phone: ['', [Validators.required, Validators.maxLength(30)]],
    document: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(18)]]
  });

  constructor() {
    this.reload();
  }

  showErr(ctrl: { invalid: boolean; touched: boolean; dirty: boolean }): boolean {
    return ctrl.invalid && (ctrl.touched || ctrl.dirty);
  }

  errMsg(
    ctrl: { errors?: Record<string, unknown> | null; hasError: (s: string) => boolean },
    label: string
  ): string {
    if (ctrl.hasError('required')) return `${label} é obrigatório.`;
    if (ctrl.hasError('email')) return 'Informe um e-mail válido.';
    if (ctrl.hasError('maxlength')) return `${label} excede o tamanho máximo.`;
    if (ctrl.hasError('minlength')) return `${label} é curto demais (mín. 11 caracteres).`;
    return `${label} inválido.`;
  }

  reload() {
    this.loading.set(true);
    this.error.set(null);
    this.api.list().subscribe({
      next: (list) => {
        this.clients.set(list);
        this.loading.set(false);
        const sel = this.selected();
        if (sel && !list.some((c) => c.id === sel.id)) {
          this.clearSelection();
        }
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Falha ao carregar clientes (verifique login/API).');
      }
    });
  }

  openEdit(id: string) {
    this.loading.set(true);
    this.error.set(null);
    this.api.get(id).subscribe({
      next: (c) => {
        this.selected.set(c);
        this.editForm.reset({
          name: c.name,
          email: c.email,
          phone: c.phone,
          document: c.document
        });
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Falha ao carregar o cliente.');
      }
    });
  }

  clearSelection(): void {
    this.selected.set(null);
    this.editForm.reset({ name: '', email: '', phone: '', document: '' });
  }

  saveEdit() {
    const row = this.selected();
    if (!row || this.editForm.invalid) return;
    this.loading.set(true);
    this.error.set(null);
    const v = this.editForm.getRawValue();
    this.api.update(row.id, v).subscribe({
      next: (updated) => {
        this.selected.set(updated);
        this.reload();
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Falha ao atualizar cliente.');
      }
    });
  }

  create() {
    if (this.form.invalid) return;
    this.loading.set(true);
    this.error.set(null);
    const v = this.form.getRawValue();
    this.api.create(v).subscribe({
      next: () => {
        this.form.reset({ name: '', email: '', phone: '', document: '' });
        this.reload();
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Falha ao cadastrar cliente.');
      }
    });
  }

  remove(id: string) {
    if (!globalThis.confirm('Excluir este cliente? Esta ação não pode ser desfeita.')) {
      return;
    }
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
        this.error.set('Falha ao excluir cliente.');
      }
    });
  }
}
