import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { UsersApi } from './users.api';

describe('UsersApi', () => {
  let api: UsersApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersApi, provideHttpClient(), provideHttpClientTesting()]
    });
    api = TestBed.inject(UsersApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('list GET /api/v1/users', () => {
    api.list().subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/users'));
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('create POST /api/v1/users', () => {
    api.create({ email: 'a@b.com', password: 'secret123', roles: ['ROLE_USER'] }).subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/users'));
    expect(req.request.method).toBe('POST');
    expect(req.request.body.email).toBe('a@b.com');
    req.flush({
      id: '1',
      email: 'a@b.com',
      enabled: true,
      roles: ['ROLE_USER'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
  });

  it('update PATCH /api/v1/users/:id', () => {
    api.update('abc', { enabled: false, roles: ['ROLE_USER'] }).subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/users/abc'));
    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual({ enabled: false, roles: ['ROLE_USER'] });
    req.flush({
      id: 'abc',
      email: 'x@y.com',
      enabled: false,
      roles: ['ROLE_USER'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
  });
});
