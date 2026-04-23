import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <div class="auth-shell">
      <h1>Login</h1>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <label>
          <span>Email</span>
          <input type="email" formControlName="email" autocomplete="email" />
        </label>

        <label>
          <span>Senha</span>
          <input type="password" formControlName="password" autocomplete="current-password" />
        </label>

        @if (error()) {
          <p class="error">{{ error() }}</p>
        }

        <button type="submit" [disabled]="form.invalid || loading()">Entrar</button>
      </form>

      <p class="hint">
        Em dev, existe um seed default:
        <code>admin@example.com</code> / <code>admin123</code>
      </p>

      <a routerLink="/items">Ir para Items</a>
    </div>
  `,
  styles: [
    `
      .auth-shell {
        max-width: 420px;
        margin: 48px auto;
        padding: 24px;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        background: #fff;
      }
      form {
        display: grid;
        gap: 12px;
      }
      label {
        display: grid;
        gap: 6px;
      }
      input {
        padding: 10px 12px;
        border: 1px solid #d1d5db;
        border-radius: 10px;
        outline: none;
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
      .error {
        color: #b91c1c;
        margin: 0;
      }
      .hint {
        margin-top: 16px;
        color: #374151;
      }
      code {
        background: #f3f4f6;
        padding: 2px 6px;
        border-radius: 6px;
      }
    `
  ]
})
export class LoginPage {
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });

  onSubmit() {
    if (this.form.invalid) return;
    this.loading.set(true);
    this.error.set(null);

    this.auth.login(this.form.getRawValue()).subscribe({
      next: async () => {
        this.loading.set(false);
        await this.router.navigateByUrl('/items');
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Credenciais inválidas ou servidor indisponível.');
      }
    });
  }
}

