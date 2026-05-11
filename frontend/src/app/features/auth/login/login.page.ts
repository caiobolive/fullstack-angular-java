import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="login-page">
      <mat-card appearance="outlined" class="login-card app-feature-panel">
        <mat-card-header class="login-card-head">
          <mat-card-title>Login</mat-card-title>
          <mat-card-subtitle>Acesse com sua conta</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content class="login-card-body">
          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="login-form app-feature-form-stack">
            <mat-form-field appearance="outline">
              <mat-label>E-mail</mat-label>
              <input matInput type="email" formControlName="email" autocomplete="email" />
              @if (showEmailErrors()) {
                @if (form.controls.email.hasError('required')) {
                  <mat-error>E-mail é obrigatório.</mat-error>
                } @else if (form.controls.email.hasError('email')) {
                  <mat-error>Informe um e-mail válido.</mat-error>
                }
              }
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Senha</mat-label>
              <input matInput type="password" formControlName="password" autocomplete="current-password" />
              @if (showPasswordErrors()) {
                @if (form.controls.password.hasError('required')) {
                  <mat-error>Senha é obrigatória.</mat-error>
                } @else if (form.controls.password.hasError('minlength')) {
                  <mat-error>Mínimo de 3 caracteres.</mat-error>
                }
              }
            </mat-form-field>

            @if (error()) {
              <p class="login-inline-error app-inline-alert-error mat-body-medium" role="alert">{{ error() }}</p>
            }

            <div class="login-actions">
              <div class="login-actions__primary">
                <button mat-flat-button color="primary" type="submit" [disabled]="form.invalid || loading()">
                  Entrar
                </button>
                @if (loading()) {
                  <mat-spinner diameter="28" aria-label="Carregando" />
                }
              </div>
              <a mat-stroked-button routerLink="/customers" type="button">Ir para Clientes</a>
            </div>
          </form>

          <p class="login-dev-hint mat-body-small app-text-muted">
            Em dev, existe um seed default:
            <code>admin&#64;example.com</code> / <code>admin123</code>
          </p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .login-page {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        min-height: 60vh;
        padding: var(--app-space-6) var(--app-space-4) var(--app-space-7);
      }

      .login-card {
        width: 100%;
        max-width: 26.25rem;
      }

      .login-card-head {
        display: block;
        padding-bottom: 0;
        margin-bottom: var(--app-space-3);
      }

      .login-card-body {
        padding-top: 0 !important;
      }

      .login-form {
        gap: var(--app-space-3);
      }

      .login-inline-error {
        margin: 0;
      }

      .login-actions {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: var(--app-space-3);
        margin-top: var(--app-space-2);
      }

      .login-actions__primary {
        display: inline-flex;
        align-items: center;
        gap: var(--app-space-3);
        min-height: 40px;
      }

      .login-actions > .mat-mdc-outlined-button {
        flex-shrink: 0;
      }

      .login-dev-hint {
        margin-top: var(--app-space-4);
        margin-bottom: 0;
        padding-top: var(--app-space-3);
        border-top: 1px solid var(--mat-sys-outline-variant);
        line-height: 1.55;
      }

      .login-dev-hint code {
        padding: var(--app-space-1) var(--app-space-2);
        border-radius: var(--app-radius-sm);
        background-color: var(--mat-sys-surface-container-highest);
        color: var(--mat-sys-on-surface-variant);
        font-size: 0.875rem;
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

  showEmailErrors(): boolean {
    const c = this.form.controls.email;
    return c.invalid && (c.touched || c.dirty);
  }

  showPasswordErrors(): boolean {
    const c = this.form.controls.password;
    return c.invalid && (c.touched || c.dirty);
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.loading.set(true);
    this.error.set(null);

    this.auth.login(this.form.getRawValue()).subscribe({
      next: async () => {
        this.loading.set(false);
        await this.router.navigateByUrl('/customers');
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Credenciais inválidas ou servidor indisponível.');
      }
    });
  }
}
