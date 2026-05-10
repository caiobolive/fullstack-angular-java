import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CustomersApi } from './customers.api';

describe('CustomersApi', () => {
  let api: CustomersApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomersApi, provideHttpClient(), provideHttpClientTesting()]
    });
    api = TestBed.inject(CustomersApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  const payload = { name: 'A', email: 'a@b.com', phone: '11999999999', document: '12345678901' };

  it('list calls GET /api/v1/customers', () => {
    api.list().subscribe();
    const req = httpMock.expectOne((r) => r.url.split('?')[0].endsWith('/api/v1/customers'));
    expect(req.request.method).toBe('GET');
    expect(req.request.params.keys().length).toBe(0);
    req.flush([]);
  });

  it('list sends search as query param q when provided', () => {
    api.list('  acme  ').subscribe();
    const req = httpMock.expectOne((r) => r.url.split('?')[0].endsWith('/api/v1/customers'));
    expect(req.request.params.get('q')).toBe('acme');
    req.flush([]);
  });

  it('create calls POST /api/v1/customers', () => {
    api.create(payload).subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/customers'));
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('get calls GET /api/v1/customers/:id', () => {
    api.get('abc').subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/customers/abc'));
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('update calls PUT /api/v1/customers/:id', () => {
    api.update('abc', payload).subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/customers/abc'));
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });

  it('delete calls DELETE /api/v1/customers/:id', () => {
    api.delete('abc').subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/customers/abc'));
    expect(req.request.method).toBe('DELETE');
    req.flush(null, { status: 204, statusText: 'No Content' });
  });
});
