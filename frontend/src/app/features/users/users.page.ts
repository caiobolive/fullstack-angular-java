import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { UsersApi, type UserResponse } from '../../api/users.api';
import { AuthService } from '../../core/auth/auth.service';

type UserRowDraft = { enabled: boolean; roleUser: boolean; roleAdmin: boolean };

@Component({
  selector: 'app-users-page',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <header class="header">
        <h1>Usuários</h1>
        <p class="muted">Apenas administradores podem gerenciar usuários.</p>
      </header>

      <section class="card">
        <h2>Novo usuário</h2>
        <form [formGroup]="createForm" (ngSubmit)="create()">
          <label>
            <span>Email</span>
            <input type="email" formControlName="email" autocomplete="off" />
          </label>
          <label>
            <span>Senha (mín. 8)</span>
            <input type="password" formControlName="password" autocomplete="new-password" />
          </label>
          <fieldset>
            <legend>Papéis</legend>
            <label class="inline">
              <input type="checkbox" formControlName="roleUser" />
              ROLE_USER
            </label>
            <label class="inline">
              <input type="checkbox" formControlName="roleAdmin" />
              ROLE_ADMIN
            </label>
          </fieldset>
          <button type="submit" [disabled]="createForm.invalid || loading()">Criar</button>
        </form>
      </section>

      <section class="card">
        <div class="row">
          <h2>Lista</h2>
          <button type="button" (click)="reload()" [disabled]="loading()">Recarregar</button>
        </div>
        @if (error()) {
          <p class="error">{{ error() }}</p>
        }
        <ul class="list">
          @for (u of users(); track u.id) {
            <li class="item">
              <div class="meta">
                <strong>{{ u.email }}</strong>
                @if (drafts().get(u.id); as d) {
                  <div class="row-controls">
                    <label class="inline">
                      <input
                        type="checkbox"
                        [checked]="d.enabled"
                        [disabled]="isSelf(u)"
                        (change)="toggleEnabled(u.id, $any($event.target).checked)"
                      />
                      Ativo
                    </label>
                    <label class="inline">
                      <input type="checkbox" [checked]="d.roleUser" (change)="toggleRoleUser(u.id, $any($event.target).checked)" />
                      ROLE_USER
                    </label>
                    <label class="inline">
                      <input
                        type="checkbox"
                        [checked]="d.roleAdmin"
                        [disabled]="isSelf(u)"
                        (change)="toggleRoleAdmin(u.id, $any($event.target).checked)"
                      />
                      ROLE_ADMIN
                    </label>
                    <button type="button" class="secondary" (click)="saveRow(u)" [disabled]="loading()">Salvar</button>
                  </div>
                  @if (isSelf(u)) {
                    <small class="hint">Sua conta: não é possível desativar ou remover ROLE_ADMIN aqui.</small>
                  }
                }
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
        max-width: 720px;
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
      form {
        display: grid;
        gap: 12px;
      }
      label span {
        display: block;
        font-size: 0.85rem;
        margin-bottom: 4px;
      }
      input[type='email'],
      input[type='password'] {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #d1d5db;
        border-radius: 10px;
        box-sizing: border-box;
      }
      fieldset {
        border: 1px solid #e5e7eb;
        border-radius: 10px;
        margin: 0;
        padding: 10px 12px;
      }
      .inline {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 6px 0;
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
      }
      .error {
        color: #b91c1c;
      }
      .list {
        list-style: none;
        padding: 0;
        margin: 12px 0 0;
        display: grid;
        gap: 8px;
      }
      .item {
        border: 1px solid #f3f4f6;
        border-radius: 10px;
        padding: 12px;
      }
      .meta {
        display: grid;
        gap: 4px;
      }
      .meta small {
        color: #6b7280;
      }
      .row-controls {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
        margin-top: 8px;
      }
      button.secondary {
        background: #374151;
      }
      .hint {
        display: block;
        margin-top: 6px;
        color: #92400e;
      }
    `
  ]
})
export class UsersPage {
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly users = signal<UserResponse[]>([]);
  /** Edits keyed by user id; reset when lista recarrega. */
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
