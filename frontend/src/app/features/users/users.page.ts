import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { UsersApi, type UserResponse } from '../../api/users.api';
import { AuthService } from '../../core/auth/auth.service';

type UserRowDraft = { enabled: boolean; roleUser: boolean; roleAdmin: boolean };

@Component({
  selector: 'app-users-page',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <header class="page-header">
        <h1 class="mat-headline-medium page-title">Usuários</h1>
        <p class="mat-body-medium muted">Apenas administradores podem gerenciar usuários.</p>
      </header>

      <mat-card appearance="outlined" class="panel">
        <mat-card-header>
          <mat-card-title>Novo usuário</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="createForm" (ngSubmit)="create()" class="stack">
            <mat-form-field appearance="outline" subscriptSizing="dynamic">
              <mat-label>E-mail</mat-label>
              <input matInput type="email" formControlName="email" autocomplete="off" />
              @if (showCreateErr(createForm.controls.email)) {
                @if (createForm.controls.email.hasError('required')) {
                  <mat-error>E-mail é obrigatório.</mat-error>
                } @else if (createForm.controls.email.hasError('email')) {
                  <mat-error>Informe um e-mail válido.</mat-error>
                }
              }
            </mat-form-field>

            <mat-form-field appearance="outline" subscriptSizing="dynamic">
              <mat-label>Senha (mín. 8)</mat-label>
              <input matInput type="password" formControlName="password" autocomplete="new-password" />
              @if (showCreateErr(createForm.controls.password)) {
                @if (createForm.controls.password.hasError('required')) {
                  <mat-error>Senha é obrigatória.</mat-error>
                } @else if (createForm.controls.password.hasError('minlength')) {
                  <mat-error>Mínimo de 8 caracteres.</mat-error>
                }
              }
            </mat-form-field>

            <div class="roles">
              <mat-checkbox formControlName="roleUser">ROLE_USER</mat-checkbox>
              <mat-checkbox formControlName="roleAdmin">ROLE_ADMIN</mat-checkbox>
            </div>

            <button mat-flat-button color="primary" type="submit" [disabled]="createForm.invalid || loading()">
              Criar
            </button>
          </form>
        </mat-card-content>
      </mat-card>

      <mat-card appearance="outlined" class="panel">
        @if (loading()) {
          <mat-progress-bar mode="indeterminate" aria-label="Carregando lista" />
        }

        <mat-card-header class="list-head">
          <mat-card-title>Lista</mat-card-title>
          <button mat-stroked-button type="button" (click)="reload()" [disabled]="loading()">Recarregar</button>
        </mat-card-header>

        <mat-divider />

        <mat-card-content>
          @if (error()) {
            <p class="banner-error mat-body-medium" role="alert">{{ error() }}</p>
          }

          <div class="user-list">
            @for (u of users(); track u.id) {
              <mat-card class="user-row" appearance="outlined">
                <mat-card-content>
                  <div class="email-line mat-title-medium">{{ u.email }}</div>
                  @if (drafts().get(u.id); as d) {
                    <div class="row-controls">
                      <mat-checkbox
                        [checked]="d.enabled"
                        [disabled]="isSelf(u)"
                        (change)="toggleEnabled(u.id, $event.checked)"
                      >
                        Ativo
                      </mat-checkbox>
                      <mat-checkbox [checked]="d.roleUser" (change)="toggleRoleUser(u.id, $event.checked)">
                        ROLE_USER
                      </mat-checkbox>
                      <mat-checkbox
                        [checked]="d.roleAdmin"
                        [disabled]="isSelf(u)"
                        (change)="toggleRoleAdmin(u.id, $event.checked)"
                      >
                        ROLE_ADMIN
                      </mat-checkbox>
                      <button mat-flat-button color="primary" type="button" (click)="saveRow(u)" [disabled]="loading()">
                        Salvar
                      </button>
                    </div>
                    @if (isSelf(u)) {
                      <small class="hint mat-body-small">Sua conta: não é possível desativar ou remover ROLE_ADMIN aqui.</small>
                    }
                  }
                </mat-card-content>
              </mat-card>
            }
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: `
    .page {
      width: 100%;
      max-width: 960px;
      margin-inline: auto;
      padding-inline: 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .page-header .muted {
      margin: 4px 0 0;
      color: var(--mat-sys-on-surface-variant);
    }

    .panel {
      overflow: hidden;
    }

    .panel mat-progress-bar {
      border-radius: 12px 12px 0 0;
    }

    .stack {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 8px;
    }

    .stack mat-form-field {
      width: 100%;
    }

    .roles {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 16px;
      align-items: center;
      padding: 4px 0 8px;
    }

    .list-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      padding-top: 8px;
    }

    .banner-error {
      margin: 12px 0;
      padding: 10px 12px;
      border-radius: 8px;
      background-color: var(--mat-sys-error-container);
      color: var(--mat-sys-on-error-container);
    }

    .user-list {
      display: grid;
      gap: 12px;
      margin-top: 16px;
    }

    .user-row {
      transition: box-shadow calc(var(--app-motion-duration-medium) + 20ms) var(--app-motion-easing-standard);
    }

    .email-line {
      margin-bottom: 4px;
    }

    .row-controls {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
      margin-top: 8px;
    }

    .hint {
      display: block;
      margin-top: 8px;
      color: var(--mat-sys-on-surface-variant);
    }
  `
})
export class UsersPage {
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly users = signal<UserResponse[]>([]);
  /** Edits keyed by user id; reset quando lista recarrega. */
  readonly drafts = signal(new Map<string, UserRowDraft>());

  private readonly api = inject(UsersApi);
  private readonly auth = inject(AuthService);
  private readonly fb = inject(FormBuilder);

  readonly createForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    roleUser: [true],
    roleAdmin: [false]
  });

  constructor() {
    this.reload();
  }

  showCreateErr(ctrl: { invalid: boolean; touched: boolean; dirty: boolean }): boolean {
    return ctrl.invalid && (ctrl.touched || ctrl.dirty);
  }

  isSelf(u: UserResponse): boolean {
    return this.auth.getUserId() === u.id;
  }

  reload() {
    this.loading.set(true);
    this.error.set(null);
    this.api.list().subscribe({
      next: (list) => {
        this.users.set(list);
        this.initDrafts(list);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Falha ao carregar usuários (permissão ou API).');
      }
    });
  }

  private initDrafts(list: UserResponse[]) {
    const m = new Map<string, UserRowDraft>();
    for (const u of list) {
      m.set(u.id, {
        enabled: u.enabled,
        roleUser: u.roles.includes('ROLE_USER'),
        roleAdmin: u.roles.includes('ROLE_ADMIN')
      });
    }
    this.drafts.set(m);
  }

  private patchDraft(id: string, partial: Partial<UserRowDraft>) {
    const m = new Map(this.drafts());
    const cur = m.get(id);
    if (!cur) return;
    m.set(id, { ...cur, ...partial });
    this.drafts.set(m);
  }

  toggleEnabled(id: string, checked: boolean) {
    this.patchDraft(id, { enabled: checked });
  }

  toggleRoleUser(id: string, checked: boolean) {
    this.patchDraft(id, { roleUser: checked });
  }

  toggleRoleAdmin(id: string, checked: boolean) {
    this.patchDraft(id, { roleAdmin: checked });
  }

  saveRow(u: UserResponse) {
    const d = this.drafts().get(u.id);
    if (!d) return;
    const roles: string[] = [];
    if (d.roleUser) roles.push('ROLE_USER');
    if (d.roleAdmin) roles.push('ROLE_ADMIN');
    if (roles.length === 0) {
      this.error.set('Selecione pelo menos um papel.');
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    this.api.update(u.id, { enabled: d.enabled, roles }).subscribe({
      next: () => this.reload(),
      error: () => {
        this.loading.set(false);
        this.error.set('Falha ao atualizar usuário (regra de segurança ou dados inválidos).');
      }
    });
  }

  create() {
    if (this.createForm.invalid) return;
    const v = this.createForm.getRawValue();
    const roles: string[] = [];
    if (v.roleUser) roles.push('ROLE_USER');
    if (v.roleAdmin) roles.push('ROLE_ADMIN');
    if (roles.length === 0) {
      this.error.set('Selecione pelo menos um papel.');
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    this.api.create({ email: v.email, password: v.password, roles }).subscribe({
      next: () => {
        this.createForm.reset({ email: '', password: '', roleUser: true, roleAdmin: false });
        this.reload();
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Falha ao criar usuário (email duplicado ou dados inválidos).');
      }
    });
  }
}
