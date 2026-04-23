import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let tokenStorage: TokenStorageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [AuthService, TokenStorageService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    tokenStorage = TestBed.inject(TokenStorageService);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('starts unauthenticated when storage empty', () => {
    expect(service.isAuthenticated()).toBe(false);
    expect(service.getAccessToken()).toBeNull();
  });

  it('login stores tokens and sets authenticated', () => {
    service.login({ email: 'admin@example.com', password: 'admin123' }).subscribe();

    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/auth/login'));
    expect(req.request.method).toBe('POST');
    req.flush({
      accessToken: 'a.b.c',
      refreshToken: 'r1',
      refreshTokenExpiresAt: new Date().toISOString()
    });

    expect(service.isAuthenticated()).toBe(true);
    expect(tokenStorage.getAccessToken()).toBe('a.b.c');
    expect(tokenStorage.getRefreshToken()).toBe('r1');
  });

  it('logout clears tokens', () => {
    service.login({ email: 'admin@example.com', password: 'admin123' }).subscribe();
    httpMock.expectOne((r) => r.url.endsWith('/api/v1/auth/login')).flush({
      accessToken: 'a.b.c',
      refreshToken: 'r1',
      refreshTokenExpiresAt: new Date().toISOString()
    });
    expect(service.isAuthenticated()).toBe(true);

    service.logout();
    expect(service.isAuthenticated()).toBe(false);
    expect(tokenStorage.getAccessToken()).toBeNull();
    expect(tokenStorage.getRefreshToken()).toBeNull();
  });

  it('refresh errors when no refresh token', () => {
    let error: unknown = null;
    service.refresh().subscribe({ error: (e) => (error = e) });
    expect(error).toBeTruthy();
  });
});

