import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule],
  template: `
    <div class="app-shell">
      <mat-toolbar color="primary" class="topbar">
        <a mat-button routerLink="/customers" class="brand-link" aria-label="Início">
          <span class="brand brand-text">Fullstack Study</span>
        </a>
        <span class="toolbar-spacer"></span>
        <nav class="nav" aria-label="Principal">
          <a
            mat-button
            routerLink="/customers"
            routerLinkActive="nav-active"
            [routerLinkActiveOptions]="{ exact: false }"
          >
            Clientes
          </a>
          @if (auth.isAuthenticated() && auth.getRoles().includes('ROLE_ADMIN')) {
            <a mat-button routerLink="/users" routerLinkActive="nav-active" [routerLinkActiveOptions]="{ exact: false }">
              Usuários
            </a>
          }
          @if (!auth.isAuthenticated()) {
            <a mat-button routerLink="/login" routerLinkActive="nav-active">Login</a>
          } @else {
            <button mat-button type="button" (click)="logout()">Sair</button>
          }
        </nav>
      </mat-toolbar>

      <main class="content">
        <div class="content-inner">
          <router-outlet />
        </div>
      </main>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    public readonly auth: AuthService,
    private readonly router: Router
  ) {}

  logout(): void {
    this.auth.logout();
    void this.router.navigateByUrl('/login');
  }
}
