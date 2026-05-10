import { Routes } from '@angular/router';

import { authGuard } from './core/auth/auth.guard';
import { roleGuard } from './core/auth/role.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'customers' },
  {
    path: 'login',
    data: { animation: 'login' },
    loadComponent: () => import('./features/auth/login/login.page').then((m) => m.LoginPage)
  },
  { path: 'clients', pathMatch: 'full', redirectTo: 'customers' },
  {
    path: 'customers',
    data: { animation: 'customers' },
    canActivate: [authGuard],
    loadComponent: () => import('./features/customers/customers.page').then((m) => m.CustomersPage)
  },
  {
    path: 'users',
    data: { animation: 'users' },
    canActivate: [authGuard, roleGuard(['ROLE_ADMIN'])],
    loadComponent: () => import('./features/users/users.page').then((m) => m.UsersPage)
  },
  { path: '**', redirectTo: 'customers' }
];
