import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { ItemsApi, type ItemResponse } from '../../api/items.api';

@Component({
  selector: 'app-items-page',
  imports: [ReactiveFormsModule],
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

      <section class="card">
        <div class="row">
          <h2>Lista</h2>
          <button (click)="reload()" [disabled]="loading()">Recarregar</button>
        </div>

        @if (error()) {
          <p class="error">{{ error() }}</p>
        }

        <ul class="list">
          @for (item of items(); track item.id) {
            <li class="item">
              <div class="meta">
                <strong>{{ item.name }}</strong>
                <small>ID: {{ item.id }}</small>
                <small>Owner: {{ item.ownerId }}</small>
              </div>
              <div class="actions">
                <button class="danger" (click)="remove(item.id)" [disabled]="loading()">Excluir</button>
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
    `
  ]
})
export class ItemsPage {
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly items = signal<ItemResponse[]>([]);

  private readonly api = inject(ItemsApi);
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
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
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Falha ao carregar items (verifique login/API).');
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
      next: () => this.reload(),
      error: () => {
        this.loading.set(false);
        this.error.set('Falha ao excluir item.');
      }
    });
  }
}

