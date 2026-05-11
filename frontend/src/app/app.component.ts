import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AuthService } from './core/auth/auth.service';
import { THEME_MENU_OPTIONS, ThemeService } from './core/theme/theme.service';
import { routeAnimations } from './route-animations';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  animations: [routeAnimations],
  template: `
    <div class="app-shell">
      <div class="app-topbar-frame">
      <mat-toolbar color="primary" class="topbar">
        <button
          mat-icon-button
          type="button"
          class="mobile-nav-trigger"
          [matMenuTriggerFor]="mobileNavMenu"
          aria-haspopup="menu"
          aria-label="Abrir menu de navegação"
        >
          <mat-icon>menu</mat-icon>
        </button>
        <a mat-button routerLink="/customers" class="brand-link" aria-label="Início">
          <span class="brand brand-text">Fullstack Study</span>
        </a>
        <span class="toolbar-spacer"></span>
        <nav class="nav nav-desktop" aria-label="Principal">
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
        <button
          mat-icon-button
          type="button"
          class="theme-trigger"
          [matMenuTriggerFor]="themeMenu"
          [matTooltip]="themeTooltip()"
          aria-haspopup="menu"
          aria-label="Tema da interface"
        >
          <mat-icon>{{ theme.effectiveDark() ? 'dark_mode' : 'light_mode' }}</mat-icon>
        </button>
        <mat-menu #themeMenu="matMenu">
          @for (opt of themeMenuOptions; track opt.value) {
            <button mat-menu-item type="button" (click)="theme.setPreference(opt.value)">
              <mat-icon>{{ opt.icon }}</mat-icon>
              <span>{{ opt.label }}</span>
              @if (theme.preference() === opt.value) {
                <mat-icon iconPositionEnd>check</mat-icon>
              }
            </button>
          }
        </mat-menu>
        <mat-menu #mobileNavMenu="matMenu">
          <button mat-menu-item type="button" routerLink="/customers">
            <mat-icon>people</mat-icon>
            <span>Clientes</span>
          </button>
          @if (auth.isAuthenticated() && auth.getRoles().includes('ROLE_ADMIN')) {
            <button mat-menu-item type="button" routerLink="/users">
              <mat-icon>manage_accounts</mat-icon>
              <span>Usuários</span>
            </button>
          }
          <mat-divider />
          @if (!auth.isAuthenticated()) {
            <button mat-menu-item type="button" routerLink="/login">
              <mat-icon>login</mat-icon>
              <span>Login</span>
            </button>
          } @else {
            <button mat-menu-item type="button" (click)="logout()">
              <mat-icon>logout</mat-icon>
              <span>Sair</span>
            </button>
          }
        </mat-menu>
      </mat-toolbar>
      </div>

      <main class="content">
        <div class="content-inner">
          <div
            class="route-viewport"
            [@routeAnimations]="prepareRoute(outlet)"
            [@.disabled]="routeAnimationsDisabled"
          >
            <router-outlet #outlet="outlet" />
          </div>
        </div>
      </main>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly theme = inject(ThemeService);
  readonly themeMenuOptions = THEME_MENU_OPTIONS;

  /** Desativa animações de rota quando o utilizador prefere menos movimento. */
  readonly routeAnimationsDisabled =
    typeof globalThis.matchMedia === 'function' &&
    globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor(
    public readonly auth: AuthService,
    private readonly router: Router
  ) {}

  themeTooltip(): string {
    switch (this.theme.preference()) {
      case 'dark':
        return 'Tema escuro';
      case 'light':
        return 'Tema claro';
      default:
        return 'Tema: seguir sistema';
    }
  }

  prepareRoute(outlet: RouterOutlet): string {
    if (!outlet.isActivated) {
      return '';
    }
    const key = outlet.activatedRoute.snapshot.data['animation'];
    return typeof key === 'string' ? key : '';
  }

  logout(): void {
    this.auth.logout();
    void this.router.navigateByUrl('/login');
  }
}
