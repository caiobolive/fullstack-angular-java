import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { roleGuard } from './role.guard';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

describe('roleGuard', () => {
  afterEach(() => localStorage.clear());

  it('redirects to /customers when authenticated but missing role', () => {
    localStorage.setItem('access_token', makeJwtWithRoles(['ROLE_USER']));
    TestBed.configureTestingModule({
      providers: [AuthService, TokenStorageService, provideRouter([])]
    });
    const router = TestBed.inject(Router);
    const result = TestBed.runInInjectionContext(() => roleGuard(['ROLE_ADMIN'])({} as any, {} as any));
    expect(result).toEqual(router.parseUrl('/customers'));
  });

  it('allows when role present', () => {
    localStorage.setItem('access_token', makeJwtWithRoles(['ROLE_ADMIN']));
    TestBed.configureTestingModule({
      providers: [AuthService, TokenStorageService, provideRouter([])]
    });
    const result = TestBed.runInInjectionContext(() => roleGuard(['ROLE_ADMIN'])({} as any, {} as any));
    expect(result).toBe(true);
  });
});

/** Minimal JWT: header.payload.sig (payload base64url with roles array). Keep = padding so atob() decodes. */
function makeJwtWithRoles(roles: string[]): string {
  const toB64Url = (obj: object) =>
    btoa(JSON.stringify(obj))
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  return `${toB64Url({ alg: 'none' })}.${toB64Url({ roles })}.x`;
}
