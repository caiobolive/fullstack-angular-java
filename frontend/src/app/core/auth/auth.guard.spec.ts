import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { authGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

describe('authGuard', () => {
  it('redirects to /login when not authenticated', () => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [AuthService, TokenStorageService, provideRouter([])]
    });

    const router = TestBed.inject(Router);
    const result = TestBed.runInInjectionContext(() => authGuard({} as any, {} as any));
    expect(result.toString()).toContain('/login');
    expect(result).toEqual(router.parseUrl('/login'));
  });

  it('allows when authenticated', () => {
    localStorage.clear();
    localStorage.setItem('access_token', 'a.b.c');
    TestBed.configureTestingModule({
      providers: [AuthService, TokenStorageService, provideRouter([])]
    });

    const result = TestBed.runInInjectionContext(() => authGuard({} as any, {} as any));
    expect(result).toBe(true);
  });
});

