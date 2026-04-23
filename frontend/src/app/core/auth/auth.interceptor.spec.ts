import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { authInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

describe('authInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        TokenStorageService,
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting()
      ]
    });
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('adds Authorization when access token exists', () => {
    const tokenStorage = TestBed.inject(TokenStorageService);
    tokenStorage.setTokens('tok', 'ref');

    http.get('http://localhost:8080/api/v1/items').subscribe();

    const req = httpMock.expectOne('http://localhost:8080/api/v1/items');
    expect(req.request.headers.get('Authorization')).toBe('Bearer tok');
    req.flush([]);
  });

  it('does not add Authorization for auth endpoints', () => {
    const tokenStorage = TestBed.inject(TokenStorageService);
    tokenStorage.setTokens('tok', 'ref');

    http.post('http://localhost:8080/api/v1/auth/login', {}).subscribe();

    const req = httpMock.expectOne('http://localhost:8080/api/v1/auth/login');
    expect(req.request.headers.get('Authorization')).toBeNull();
    req.flush({});
  });
});
