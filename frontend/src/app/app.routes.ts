import { Routes } from '@angular/router';

import { authGuard } from './core/auth/auth.guard';
import { LoginPage } from './features/auth/login/login.page';
import { ItemsPage } from './features/items/items.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'items' },
  { path: 'login', component: LoginPage },
  { path: 'items', component: ItemsPage, canActivate: [authGuard] },
  { path: '**', redirectTo: 'items' }
];
