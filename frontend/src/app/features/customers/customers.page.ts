import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged, take } from 'rxjs';

import { CustomersApi, type CustomerResponse } from '../../api/customers.api';
import { CustomersCloseUnsavedDialogComponent } from './customers-close-unsaved-dialog.component';
import { CustomersDeleteConfirmDialogComponent } from './customers-delete-confirm-dialog.component';
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-customers-page',
  imports: [
    ReactiveFormsModule,
    DatePipe,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTooltipModule,
    MatDialogModule,
    NgxSkeletonLoaderComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="app-feature-page customers-page">
      <header class="customers-page-header">
        <h1 class="mat-headline-medium app-feature-page__title customers-page-title">Clientes</h1>
        <div class="customers-page-tools">
          <mat-form-field appearance="outline" class="customers-inline-search" subscriptSizing="dynamic">
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
          <div class="toolbar">
            <button mat-flat-button color="primary" type="button" (click)="openCreate()" [disabled]="busy()">
              Novo cliente
            </button>
            <button mat-stroked-button type="button" (click)="reload()" [disabled]="busy()">Recarregar</button>
          </div>
        </div>
      </header>

      <mat-sidenav-container class="customers-sidenav" [hasBackdrop]="true">
        <mat-sidenav-content>
          <mat-card appearance="outlined" class="app-feature-panel">
            <mat-card-content class="customers-panel-body">
              @if (error()) {
                <p class="app-inline-alert-error mat-body-medium" role="alert">{{ error() }}</p>
              }

              @if (listLoading()) {
                <div
                  class="customer-skeleton-list"
                  role="status"
                  aria-live="polite"
                  aria-busy="true"
                  aria-label="Carregando lista de clientes"
                >
                  @for (s of skeletonSlots; track s) {
                    <div class="customer-skeleton-card">
                      <div class="customer-skeleton-card__text" aria-hidden="true">
                        <div class="customer-skeleton-line customer-skeleton-line--title"></div>
                        <div class="customer-skeleton-line customer-skeleton-line--mid"></div>
                        <div class="customer-skeleton-line customer-skeleton-line--meta"></div>
                      </div>
                      <div class="customer-skeleton-card__actions">
                        <ngx-skeleton-loader
                          [count]="1"
                          appearance="circle"
                          [theme]="skeletonThemeFab"
                          ariaLabel="Carregando ação editar"
                        />
                        <ngx-skeleton-loader
                          [count]="1"
                          appearance="circle"
                          [theme]="skeletonThemeFab"
                          ariaLabel="Carregando ação excluir"
                        />
                      </div>
                    </div>
                  }
                </div>
              } @else if (customers().length === 0 && !activeSearch()) {
                <div class="empty-state" role="status">
                  <p class="empty-title mat-body-large">Nenhum cliente cadastrado</p>
                  <p class="empty-hint mat-body-medium app-text-muted">
                    Que tal adicionar o primeiro? Use o botão acima ou cadastre direto aqui.
                  </p>
                  <button mat-flat-button color="primary" type="button" (click)="openCreate()" [disabled]="busy()">
                    Cadastrar primeiro cliente
                  </button>
                </div>
              } @else if (customers().length === 0 && activeSearch()) {
                <div class="empty-state" role="status">
                  <p class="empty-title mat-body-large">Nenhum resultado encontrado</p>
                  <p class="empty-hint mat-body-medium app-text-muted">
                    Ajuste o termo de busca ou limpe o campo para ver todos os clientes.
                  </p>
                </div>
              } @else {
                <mat-list class="customer-list" role="list">
                  @for (c of customers(); track c.id) {
                    <mat-list-item
                      class="customer-item"
                      [class.customer-item-selected]="editorOpen() && selected()?.id === c.id"
                    >
                      <div matListItemTitle class="customer-block">
                        <div class="customer-name">{{ c.name }}</div>
                        <div class="customer-contact mat-body-medium">{{ c.email }} · {{ c.phone }}</div>
                        <div class="customer-meta mat-body-small app-text-muted">
                          Doc: {{ c.document }} · Criado {{ c.createdAt | date: 'short' }} · Atualizado
                          {{ c.updatedAt | date: 'short' }} · Owner: {{ c.ownerId }}
                        </div>
                      </div>
                      <div matListItemMeta class="item-actions">
                        <button
                          mat-mini-fab
                          type="button"
                          color="primary"
                          class="item-action-fab item-action-fab--edit"
                          (click)="openEdit(c.id)"
                          [disabled]="busy()"
                          matTooltip="Editar"
                          aria-label="Editar cliente"
                        >
                          <mat-icon>edit</mat-icon>
                        </button>
                        <button
                          mat-mini-fab
                          type="button"
                          color="warn"
                          class="item-action-fab item-action-fab--delete"
                          (click)="requestDelete(c)"
                          [disabled]="busy()"
                          matTooltip="Excluir"
                          aria-label="Excluir cliente"
                        >
                          <mat-icon>delete</mat-icon>
                        </button>
                      </div>
                    </mat-list-item>
                  }
                </mat-list>
                @if (totalElements() > 0) {
                  <mat-paginator
                    class="customers-paginator"
                    [length]="totalElements()"
                    [pageIndex]="pageIndex()"
                    [pageSize]="pageSize()"
                    [pageSizeOptions]="pageSizeOptions"
                    [showFirstLastButtons]="true"
                    (page)="onListPageChange($event)"
                    aria-label="Selecionar página da lista de clientes"
                  />
                }
              }
            </mat-card-content>
          </mat-card>
        </mat-sidenav-content>

        <mat-sidenav
          position="end"
          mode="over"
          [fixedInViewport]="true"
          [opened]="editorOpen()"
          (openedChange)="onEditorDrawerOpenedChange($event)"
          [disableClose]="actionLoading() || customerForm.dirty"
          class="customers-editor-sidenav"
          aria-labelledby="customers-editor-title"
        >
          <div class="editor-drawer-panel">
            <div class="editor-toolbar">
              <h2 id="customers-editor-title" class="mat-headline-small editor-title">
                {{ selected() ? 'Editar cliente' : 'Novo cliente' }}
              </h2>
              <button
                mat-icon-button
                type="button"
                (click)="requestCloseWithoutSave()"
                [disabled]="actionLoading()"
                matTooltip="Fechar painel"
                aria-label="Fechar painel de edição"
              >
                <mat-icon>close</mat-icon>
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
                <button
                  mat-stroked-button
                  type="button"
                  class="cancel-editor"
                  (click)="requestCloseWithoutSave()"
                  [disabled]="actionLoading()"
                  matTooltip="Cancelar edição e fechar o painel"
                >
                  Cancelar
                </button>
                <button mat-flat-button color="primary" type="submit" [disabled]="customerForm.invalid || actionLoading()">
                  {{ selected() ? 'Salvar' : 'Cadastrar' }}
                </button>
              </div>
            </form>
          </div>
        </mat-sidenav>
      </mat-sidenav-container>
    </div>
  `,
  styles: [
    `
      .customers-page {
        flex: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
        padding-top: var(--app-space-2);
      }

      .customers-sidenav {
        flex: 1;
        min-height: min(70vh, 36rem);
        width: 100%;
        background: transparent;
      }

      :host ::ng-deep .customers-sidenav .mat-drawer-backdrop.mat-drawer-shown {
        background-color: color-mix(in srgb, var(--mat-sys-on-surface) 22%, transparent);
      }

      @supports (backdrop-filter: blur(1px)) {
        :host ::ng-deep .customers-sidenav .mat-drawer-backdrop.mat-drawer-shown {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      }

      :host ::ng-deep .customers-editor-sidenav.mat-drawer {
        width: min(100vw - var(--app-space-4), 28rem);
        border-radius: var(--app-radius-lg) 0 0 var(--app-radius-lg);
        border-inline-end: none;
        box-shadow: none;
      }

      :host ::ng-deep .customers-editor-sidenav .mat-drawer-inner-container {
        overflow-x: hidden;
      }

      .editor-drawer-panel {
        box-sizing: border-box;
        min-height: 100%;
        padding: var(--app-space-4) var(--app-space-4) var(--app-space-6);
        background-color: var(--mat-sys-surface-container-lowest);
      }

      .customers-page-header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: var(--app-space-3) var(--app-space-4);
        padding-bottom: var(--app-space-4);
        margin-bottom: var(--app-space-1);
        border-bottom: 1px solid var(--mat-sys-outline-variant);
        overflow: visible;
      }

      .customers-page-title {
        margin: 0;
        flex: 0 1 auto;
        min-width: min(100%, 12rem);
      }

      .customers-page-tools {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        gap: var(--app-space-3);
        flex: 1 1 16rem;
        overflow: visible;
      }

      .customers-inline-search {
        flex: 1 1 12rem;
        width: min(100%, 22rem);
        max-width: min(100%, 28rem);
      }

      .toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: var(--app-space-2);
        align-items: center;
        flex: 0 0 auto;
      }

      .customers-panel-body {
        padding-top: var(--app-space-4) !important;
      }

      .empty-state {
        margin-top: var(--app-space-2);
        padding: var(--app-space-6) var(--app-space-5);
        border: 1px dashed var(--mat-sys-outline-variant);
        border-radius: var(--app-radius-md);
        text-align: center;
        background-color: var(--mat-sys-surface-container-low);
      }

      .empty-title {
        margin: 0;
        font-weight: 600;
      }

      .empty-hint {
        margin: var(--app-space-2) auto var(--app-space-4);
        max-width: 22.5rem;
        line-height: 1.55;
      }

      .customer-list {
        padding: 0;
        margin-top: var(--app-space-2);
        background: transparent;
      }

      .customer-list ::ng-deep mat-list-item.customer-item + mat-list-item.customer-item {
        margin-top: var(--app-space-3);
      }

      .customer-item {
        height: auto !important;
        min-height: 4.75rem;
        align-items: center;
        box-sizing: border-box;
        border-radius: var(--app-radius-md);
        border: 1px solid var(--mat-sys-outline-variant);
        background-color: var(--mat-sys-surface-container-low);
        box-shadow: 0 1px 3px color-mix(in srgb, var(--mat-sys-on-surface) 7%, transparent);
        overflow: hidden;
      }

      .customer-item ::ng-deep .mat-mdc-list-item-meta {
        align-self: center;
      }

      .customer-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--app-space-1);
        padding-block: var(--app-space-2);
        min-width: 0;
        width: 100%;
      }

      .customer-name {
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.35;
        color: var(--mat-sys-on-surface);
      }

      .customer-contact {
        margin: 0;
        line-height: 1.4;
        color: var(--mat-sys-on-surface);
      }

      .customer-meta {
        margin: 0;
        line-height: 1.4;
        font-size: 0.8125rem;
      }

      .item-actions {
        display: flex;
        gap: var(--app-space-3);
        justify-content: flex-end;
        align-items: center;
      }

      .item-action-fab--edit.mat-mdc-mini-fab {
        --mdc-fab-container-color: var(--mat-sys-primary);
        --mat-fab-foreground-color: var(--mat-sys-on-primary);
      }

      .item-action-fab--delete.mat-mdc-mini-fab {
        --mdc-fab-container-color: var(--mat-sys-error);
        --mat-fab-foreground-color: var(--mat-sys-on-error);
      }

      .customer-item-selected {
        border-color: color-mix(in srgb, var(--mat-sys-primary) 55%, var(--mat-sys-outline-variant));
        background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, var(--mat-sys-surface-container-low));
        box-shadow: 0 0 0 1px color-mix(in srgb, var(--mat-sys-primary) 22%, transparent),
          0 1px 4px color-mix(in srgb, var(--mat-sys-on-surface) 8%, transparent);
      }

      .editor-toolbar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        gap: var(--app-space-3);
        margin-bottom: var(--app-space-4);
        padding-bottom: var(--app-space-3);
        border-bottom: 1px solid var(--mat-sys-outline-variant);
      }

      .editor-title {
        margin: 0;
        flex: 1;
        min-width: 0;
        padding-inline-end: var(--app-space-2);
      }

      .meta-sub {
        margin: 0 0 var(--app-space-4);
      }

      .actions-row {
        display: flex;
        flex-wrap: wrap;
        gap: var(--app-space-2);
        align-items: center;
        justify-content: flex-end;
        margin-top: var(--app-space-4);
        padding-top: var(--app-space-2);
      }

      .actions-row .cancel-editor {
        margin-inline-end: auto;
      }

    `
  ]
})
export class CustomersPage {
  readonly listLoading = signal(false);
  readonly actionLoading = signal(false);
  readonly busy = computed(() => this.listLoading() || this.actionLoading());

  readonly error = signal<string | null>(null);
  readonly customers = signal<CustomerResponse[]>([]);
  readonly selected = signal<CustomerResponse | null>(null);
  /** Painel lateral (mat-sidenav) aberto. */
  readonly editorOpen = signal(false);

  readonly pageIndex = signal(0);
  readonly pageSize = signal(10);
  readonly totalElements = signal(0);

  readonly pageSizeOptions = [5, 10, 25];
  readonly skeletonSlots = [0, 1, 2, 3, 4, 5];

  /** Espelha `--customers-skeleton-fill` / `--customers-skeleton-shimmer-mid` em `feature-pages.scss`. */
  readonly skeletonThemeFab: Record<string, string> = {
    width: '40px',
    height: '40px',
    margin: '0',
    'margin-bottom': '0',
    '--ngx-skeleton-loader-base-color': 'var(--customers-skeleton-fill)',
    '--ngx-skeleton-loader-light-mode-color': 'var(--customers-skeleton-shimmer-mid)',
    '--ngx-skeleton-loader-light-mode-color-to': 'rgba(255, 255, 255, 0)'
  };

  readonly searchControl = new FormControl('', { nonNullable: true });

  private readonly api = inject(CustomersApi);
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialog = inject(MatDialog);

  readonly customerForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(200)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(320)]],
    phone: ['', [Validators.required, Validators.maxLength(30)]],
    document: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(18)]]
  });

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.pageIndex.set(0);
        this.reload();
      });
    this.reload();
  }

  /**
   * Fecho por backdrop ou Escape: sincroniza estado (evita chamar `clearSelection` em duplicado
   * quando o fecho já veio do botão, pois nesse caso `editorOpen` já é false).
   */
  onEditorDrawerOpenedChange(opened: boolean): void {
    if (!opened && this.editorOpen()) {
      this.clearSelection();
    }
  }

  /** Fecha o drawer; com alterações no formulário, pede confirmação em diálogo. */
  requestCloseWithoutSave(): void {
    if (this.actionLoading()) return;
    if (!this.customerForm.dirty) {
      this.clearSelection();
      return;
    }
    this.dialog
      .open(CustomersCloseUnsavedDialogComponent, {
        width: 'min(calc(100vw - 48px), 26rem)',
        autoFocus: 'first-tabbable'
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe((confirmed) => {
        if (confirmed === true) {
          this.clearSelection();
        }
      });
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

  reload(): void {
    const q = this.searchControl.value.trim();
    this.listLoading.set(true);
    this.error.set(null);
    this.api.list(q || undefined, this.pageIndex(), this.pageSize()).subscribe({
      next: (res) => {
        if (res.content.length === 0 && res.totalElements > 0 && res.totalPages > 0 && res.page >= res.totalPages) {
          this.pageIndex.set(Math.max(0, res.totalPages - 1));
          this.listLoading.set(false);
          this.reload();
          return;
        }
        this.customers.set(res.content);
        this.totalElements.set(res.totalElements);
        if (res.page !== this.pageIndex()) {
          this.pageIndex.set(res.page);
        }
        this.listLoading.set(false);
        const sel = this.selected();
        if (sel && !res.content.some((c) => c.id === sel.id)) {
          this.clearSelection();
        }
      },
      error: () => {
        this.listLoading.set(false);
        this.error.set('Falha ao carregar clientes (verifique login/API).');
      }
    });
  }

  onListPageChange(ev: PageEvent): void {
    this.pageIndex.set(ev.pageIndex);
    this.pageSize.set(ev.pageSize);
    this.reload();
  }

  openCreate(): void {
    this.editorOpen.set(true);
    this.selected.set(null);
    this.customerForm.reset({ name: '', email: '', phone: '', document: '' });
  }

  openEdit(id: string) {
    this.actionLoading.set(true);
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
        this.actionLoading.set(false);
      },
      error: () => {
        this.actionLoading.set(false);
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
      this.actionLoading.set(true);
      this.error.set(null);
      this.api.update(row.id, v).subscribe({
        next: () => {
          this.clearSelection();
          this.actionLoading.set(false);
          this.reload();
        },
        error: () => {
          this.actionLoading.set(false);
          this.error.set('Falha ao atualizar cliente.');
        }
      });
    } else {
      this.actionLoading.set(true);
      this.error.set(null);
      this.api.create(v).subscribe({
        next: () => {
          this.clearSelection();
          this.actionLoading.set(false);
          this.reload();
        },
        error: () => {
          this.actionLoading.set(false);
          this.error.set('Falha ao cadastrar cliente.');
        }
      });
    }
  }

  requestDelete(customer: CustomerResponse): void {
    if (this.busy()) return;
    this.dialog
      .open(CustomersDeleteConfirmDialogComponent, {
        width: 'min(calc(100vw - 48px), 26rem)',
        autoFocus: 'first-tabbable',
        data: { name: customer.name }
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe((confirmed) => {
        if (confirmed === true) {
          this.remove(customer.id);
        }
      });
  }

  remove(id: string) {
    this.actionLoading.set(true);
    this.error.set(null);
    this.api.delete(id).subscribe({
      next: () => {
        if (this.selected()?.id === id) {
          this.clearSelection();
        }
        this.actionLoading.set(false);
        this.reload();
      },
      error: () => {
        this.actionLoading.set(false);
        this.error.set('Falha ao excluir cliente.');
      }
    });
  }
}
