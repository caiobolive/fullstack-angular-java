import { Routes } from '@angular/router';

import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'items' },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.page').then((m) => m.LoginPage)
  },
  {
    path: 'items',
    canActivate: [authGuard],
    loadComponent: () => import('./features/items/items.page').then((m) => m.ItemsPage)
  },
  { path: '**', redirectTo: 'items' }
];
