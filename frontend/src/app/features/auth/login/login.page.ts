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
      <mat-card appearance="outlined" class="login-card">
        <mat-card-header>
          <mat-card-title>Login</mat-card-title>
          <mat-card-subtitle>Acesse com sua conta</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="login-form">
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
              <p class="server-error mat-body-medium" role="alert">{{ error() }}</p>
            }

            <div class="submit-row">
              <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid || loading()">
                Entrar
              </button>
              @if (loading()) {
                <mat-spinner diameter="28" aria-label="Carregando" />
              }
            </div>
          </form>

          <p class="hint mat-body-small">
            Em dev, existe um seed default:
            <code>admin&#64;example.com</code> / <code>admin123</code>
          </p>
        </mat-card-content>

        <mat-card-actions align="end">
          <a mat-button routerLink="/customers">Ir para Clientes</a>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .login-page {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 32px 16px 48px;
      }

      .login-card {
        width: 100%;
        max-width: 420px;
      }

      .login-form {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .login-form mat-form-field {
        width: 100%;
      }

      .submit-row {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-top: 12px;
      }

      .server-error {
        margin: 4px 0 0;
        color: var(--mat-sys-error);
      }

      .hint {
        margin-top: 20px;
        margin-bottom: 0;
        color: var(--mat-sys-on-surface-variant);
      }

      .hint code {
        padding: 2px 6px;
        border-radius: 6px;
        background-color: var(--mat-sys-surface-container-highest);
        font-size: 0.85em;
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
