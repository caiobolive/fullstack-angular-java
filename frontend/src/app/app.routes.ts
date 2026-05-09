import { Routes } from '@angular/router';

import { authGuard } from './core/auth/auth.guard';
import { roleGuard } from './core/auth/role.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'clients' },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.page').then((m) => m.LoginPage)
  },
  {
    path: 'clients',
    canActivate: [authGuard],
    loadComponent: () => import('./features/clients/clients.page').then((m) => m.ClientsPage)
  },
  {
    path: 'users',
    canActivate: [authGuard, roleGuard(['ROLE_ADMIN'])],
    loadComponent: () => import('./features/users/users.page').then((m) => m.UsersPage)
  },
  { path: '**', redirectTo: 'clients' }
];
