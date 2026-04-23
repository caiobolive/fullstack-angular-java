import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from './auth.service';
import type { Role } from './auth.types';

export const roleGuard = (required: Role[]): CanActivateFn => {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if (!auth.isAuthenticated()) return router.parseUrl('/login');

    const roles = auth.getRoles();
    const allowed = required.some((r) => roles.includes(r));
    return allowed ? true : router.parseUrl('/items');
  };
};

