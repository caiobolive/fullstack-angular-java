import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { CustomersApi, type CustomerResponse } from '../../api/customers.api';
import { editorPanelAnimations } from '../../shared/animations/editor-panel.animations';

@Component({
  selector: 'app-customers-page',
  animations: [editorPanelAnimations],
  imports: [
    ReactiveFormsModule,
    DatePipe,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="app-feature-page">
      <header>
        <h1 class="mat-headline-medium page-title">Clientes</h1>
        <p class="mat-body-medium app-feature-page__subtitle">Cadastro com formulários reativos e validações.</p>
      </header>

      <mat-card appearance="outlined" class="app-feature-panel">
        @if (loading()) {
          <mat-progress-bar mode="indeterminate" aria-label="Carregando lista" />
        }

        <mat-card-header class="app-feature-panel-head">
          <mat-card-title>Lista</mat-card-title>
          <div class="toolbar">
            <button mat-flat-button color="primary" type="button" (click)="openCreate()" [disabled]="loading()">
              Novo cliente
            </button>
            <button mat-stroked-button type="button" (click)="reload()" [disabled]="loading()">Recarregar</button>
          </div>
        </mat-card-header>

        <mat-card-content class="customers-panel-body">
          <mat-form-field appearance="outline" class="search-field" subscriptSizing="dynamic">
            <mat-label>Buscar</mat-label>
            <mat-icon matPrefix>search</mat-icon>
            <input
              matInput
              type="search"
              placeholder="Nome, e-mail, telefone ou documento…"
              autocomplete="off"
              [formControl]="searchControl"
            />
          </mat-form-field>

          @if (error()) {
            <p class="app-inline-alert-error mat-body-medium" role="alert">{{ error() }}</p>
          }

          @if (!loading() && customers().length === 0 && !activeSearch()) {
            <div class="empty-state" role="status">
              <p class="empty-title mat-body-large">Nenhum cliente cadastrado</p>
              <p class="empty-hint mat-body-medium app-text-muted">
                Que tal adicionar o primeiro? Use o botão acima ou cadastre direto aqui.
              </p>
              <button mat-flat-button color="primary" type="button" (click)="openCreate()" [disabled]="loading()">
                Cadastrar primeiro cliente
              </button>
            </div>
          } @else if (!loading() && customers().length === 0 && activeSearch()) {
            <div class="empty-state" role="status">
              <p class="empty-title mat-body-large">Nenhum resultado encontrado</p>
              <p class="empty-hint mat-body-medium app-text-muted">
                Ajuste o termo de busca ou limpe o campo para ver todos os clientes.
              </p>
            </div>
          } @else {
            <mat-list class="customer-list">
              @for (c of customers(); track c.id; let last = $last) {
                <mat-list-item
                  lines="3"
                  class="customer-item"
                  [class.customer-item-selected]="editorOpen() && selected()?.id === c.id"
                >
                  <div matListItemTitle>{{ c.name }}</div>
                  <div matListItemLine>{{ c.email }} · {{ c.phone }}</div>
                  <div matListItemLine class="dim-line app-text-muted">
                    Doc: {{ c.document }} · Criado {{ c.createdAt | date: 'short' }} · Atualizado
                    {{ c.updatedAt | date: 'short' }} · Owner: {{ c.ownerId }}
                  </div>
                  <div matListItemMeta class="item-actions">
                    <button mat-stroked-button type="button" (click)="openEdit(c.id)" [disabled]="loading()">
                      Editar
                    </button>
                    <button mat-flat-button color="warn" type="button" (click)="remove(c.id)" [disabled]="loading()">
                      Excluir
                    </button>
                  </div>
                </mat-list-item>
                @if (!last) {
                  <mat-divider />
                }
              }
            </mat-list>
          }
        </mat-card-content>
      </mat-card>

      @if (editorOpen()) {
        <div class="editor-host" [@editorPanel]>
          <mat-card appearance="outlined" class="app-feature-panel editor">
            <mat-card-content>
              <div class="editor-toolbar">
                <h2 class="mat-headline-small editor-title">{{ selected() ? 'Editar cliente' : 'Novo cliente' }}</h2>
                <button mat-stroked-button type="button" (click)="clearSelection()" [disabled]="loading()">
                  Voltar à lista
                </button>
              </div>

              @if (selected(); as sel) {
                <p class="meta-sub mat-body-small app-text-muted">
                  ID: {{ sel.id }} · Atualizado em {{ sel.updatedAt | date: 'short' }}
                </p>
              }

              <form class="app-feature-form-stack" [formGroup]="customerForm" (ngSubmit)="submitCustomerForm()">
                <mat-form-field appearance="outline">
                  <mat-label>Nome</mat-label>
                  <input matInput type="text" formControlName="name" autocomplete="name" />
                  @if (showErr(customerForm.controls.name)) {
                    <mat-error>{{ errMsg(customerForm.controls.name, 'Nome') }}</mat-error>
                  }
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>E-mail</mat-label>
                  <input matInput type="email" formControlName="email" autocomplete="email" />
                  @if (showErr(customerForm.controls.email)) {
                    <mat-error>{{ errMsg(customerForm.controls.email, 'E-mail') }}</mat-error>
                  }
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Telefone</mat-label>
                  <input matInput type="text" formControlName="phone" autocomplete="tel" />
                  @if (showErr(customerForm.controls.phone)) {
                    <mat-error>{{ errMsg(customerForm.controls.phone, 'Telefone') }}</mat-error>
                  }
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>CPF ou CNPJ</mat-label>
                  <input matInput type="text" formControlName="document" />
                  @if (showErr(customerForm.controls.document)) {
                    <mat-error>{{ errMsg(customerForm.controls.document, 'Documento') }}</mat-error>
                  }
                </mat-form-field>

                <div class="actions-row">
                  <button mat-flat-button color="primary" type="submit" [disabled]="customerForm.invalid || loading()">
                    {{ selected() ? 'Salvar' : 'Cadastrar' }}
                  </button>
                </div>
              </form>
            </mat-card-content>
          </mat-card>
        </div>
      }
    </div>
  `,
  styles: [
    `
      .toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
      }

      .customers-panel-body {
        padding-top: 8px !important;
      }

      .search-field {
        width: 100%;
        max-width: 440px;
        margin-bottom: 8px;
      }

      .empty-state {
        margin-top: 16px;
        padding: 28px 20px;
        border: 1px dashed var(--mat-sys-outline-variant);
        border-radius: 12px;
        text-align: center;
        background-color: var(--mat-sys-surface-container-low);
      }

      .empty-title {
        margin: 0;
        font-weight: 600;
      }

      .empty-hint {
        margin: 8px auto 16px;
        max-width: 360px;
        line-height: 1.45;
      }

      .customer-list {
        padding: 0;
        margin-top: 8px;
      }

      .customer-item {
        height: auto !important;
        min-height: 72px;
        align-items: flex-start;
      }

      .customer-item ::ng-deep .mat-mdc-list-item-meta {
        align-self: center;
      }

      .dim-line {
        font-size: 0.8rem;
      }

      .item-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: flex-end;
      }

      .customer-item-selected {
        background-color: color-mix(in srgb, var(--mat-sys-primary) 12%, transparent);
      }

      .editor-toolbar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        margin-bottom: 8px;
      }

      .editor-title {
        margin: 0;
      }

      .meta-sub {
        margin: 0 0 12px;
      }

      .actions-row {
        display: flex;
        gap: 8px;
        align-items: center;
        margin-top: 8px;
      }

      .editor-host {
        display: block;
        width: 100%;
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

  readonly searchControl = new FormControl('', { nonNullable: true });

  private readonly api = inject(CustomersApi);
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  readonly customerForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(200)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(320)]],
    phone: ['', [Validators.required, Validators.maxLength(30)]],
    document: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(18)]]
  });

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.reload());
    this.reload();
  }

  activeSearch(): boolean {
    return this.searchControl.value.trim().length > 0;
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
    const q = this.searchControl.value.trim();
    this.loading.set(true);
    this.error.set(null);
    this.api.list(q || undefined).subscribe({
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
