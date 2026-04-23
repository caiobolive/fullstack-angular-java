import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth/auth.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink],
    template: `
      <div class="app-shell">
        <header class="topbar">
          <a class="brand" routerLink="/items">Fullstack Study</a>

          <nav class="nav">
            <a routerLink="/items">Items</a>
            @if (!auth.isAuthenticated()) {
              <a routerLink="/login">Login</a>
            } @else {
              <button type="button" (click)="logout()">Sair</button>
            }
          </nav>
        </header>

        <main class="content">
          <router-outlet />
        </main>
      </div>
    `,
    styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public readonly auth: AuthService, private readonly router: Router) {}

  logout() {
    this.auth.logout();
    void this.router.navigateByUrl('/login');
  }
}
