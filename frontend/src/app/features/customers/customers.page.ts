import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { CustomersApi, type CustomerResponse } from '../../api/customers.api';

@Component({
  selector: 'app-customers-page',
  imports: [ReactiveFormsModule, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <header class="header">
        <h1>Clientes</h1>
        <p class="muted">Cadastro com formulários reativos e validações.</p>
      </header>

      <section class="card">
        <div class="row">
          <h2>Lista</h2>
          <div class="toolbar">
            <button type="button" (click)="openCreate()" [disabled]="loading()">Novo cliente</button>
            <button type="button" class="secondary" (click)="reload()" [disabled]="loading()">Recarregar</button>
          </div>
        </div>

        @if (error()) {
          <p class="error">{{ error() }}</p>
        }

        @if (!loading() && customers().length === 0) {
          <div class="empty-state" role="status">
            <p class="empty-title">Nenhum cliente cadastrado</p>
            <p class="empty-hint">
              Que tal adicionar o primeiro? Use o botão acima ou cadastre direto aqui.
            </p>
            <button type="button" (click)="openCreate()" [disabled]="loading()">
              Cadastrar primeiro cliente
            </button>
          </div>
        } @else {
          <ul class="list">
            @for (c of customers(); track c.id) {
              <li class="item" [class.selected]="editorOpen() && selected()?.id === c.id">
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
        }
      </section>

      @if (editorOpen()) {
        <section class="card detail">
          <div class="row">
            <h2>{{ selected() ? 'Editar cliente' : 'Novo cliente' }}</h2>
            <button type="button" class="secondary" (click)="clearSelection()" [disabled]="loading()">
              Voltar à lista
            </button>
          </div>
          @if (selected(); as sel) {
            <p class="muted">
              ID: {{ sel.id }} · Atualizado em {{ sel.updatedAt | date: 'short' }}
            </p>
          }
          <form class="form-grid" [formGroup]="customerForm" (ngSubmit)="submitCustomerForm()">
            <label>
              <span>Nome *</span>
              <input type="text" formControlName="name" autocomplete="name" />
              @if (showErr(customerForm.controls.name)) {
                <small class="field-error">{{ errMsg(customerForm.controls.name, 'Nome') }}</small>
              }
            </label>
            <label>
              <span>E-mail *</span>
              <input type="email" formControlName="email" autocomplete="email" />
              @if (showErr(customerForm.controls.email)) {
                <small class="field-error">{{ errMsg(customerForm.controls.email, 'E-mail') }}</small>
              }
            </label>
            <label>
              <span>Telefone *</span>
              <input type="text" formControlName="phone" autocomplete="tel" />
              @if (showErr(customerForm.controls.phone)) {
                <small class="field-error">{{ errMsg(customerForm.controls.phone, 'Telefone') }}</small>
              }
            </label>
            <label>
              <span>CPF ou CNPJ *</span>
              <input type="text" formControlName="document" />
              @if (showErr(customerForm.controls.document)) {
                <small class="field-error">{{ errMsg(customerForm.controls.document, 'Documento') }}</small>
              }
            </label>
            <div class="actions-row">
              <button type="submit" [disabled]="customerForm.invalid || loading()">
                {{ selected() ? 'Salvar' : 'Cadastrar' }}
              </button>
            </div>
          </form>
        </section>
      }
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
      .toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
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
      .empty-state {
        margin-top: 16px;
        padding: 28px 20px;
        border: 1px dashed #d1d5db;
        border-radius: 12px;
        text-align: center;
        background: #f9fafb;
      }
      .empty-title {
        margin: 0;
        font-size: 1.05rem;
        font-weight: 600;
        color: #111827;
      }
      .empty-hint {
        margin: 8px auto 16px;
        max-width: 360px;
        color: #6b7280;
        font-size: 0.9rem;
        line-height: 1.45;
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
export class CustomersPage {
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly customers = signal<CustomerResponse[]>([]);
  readonly selected = signal<CustomerResponse | null>(null);
  /** Formulário visível apenas após “Novo cliente” ou “Editar”. */
  readonly editorOpen = signal(false);

  private readonly api = inject(CustomersApi);
  private readonly fb = inject(FormBuilder);

  readonly customerForm = this.fb.nonNullable.group({
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
        this.customers.set(list);
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

  openCreate(): void {
    this.editorOpen.set(true);
    this.selected.set(null);
    this.customerForm.reset({ name: '', email: '', phone: '', document: '' });
  }

  openEdit(id: string) {
    this.loading.set(true);
    this.error.set(null);
    this.api.get(id).subscribe({
      next: (c) => {
        this.selected.set(c);
        this.editorOpen.set(true);
        this.customerForm.reset({
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
    this.editorOpen.set(false);
    this.selected.set(null);
    this.customerForm.reset({ name: '', email: '', phone: '', document: '' });
  }

  submitCustomerForm() {
    const row = this.selected();
    if (this.customerForm.invalid) return;
    const v = this.customerForm.getRawValue();
    if (row) {
      this.loading.set(true);
      this.error.set(null);
      this.api.update(row.id, v).subscribe({
        next: () => {
          this.clearSelection();
          this.reload();
        },
        error: () => {
          this.loading.set(false);
          this.error.set('Falha ao atualizar cliente.');
        }
      });
    } else {
      this.loading.set(true);
      this.error.set(null);
      this.api.create(v).subscribe({
        next: () => {
          this.clearSelection();
          this.reload();
        },
        error: () => {
          this.loading.set(false);
          this.error.set('Falha ao cadastrar cliente.');
        }
      });
    }
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
