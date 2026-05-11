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

  const emptyPage = { content: [], page: 0, size: 10, totalElements: 0, totalPages: 0 };

  it('list calls GET /api/v1/customers with page and size', () => {
    api.list().subscribe();
    const req = httpMock.expectOne((r) => r.url.split('?')[0].endsWith('/api/v1/customers'));
    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('page')).toBe('0');
    expect(req.request.params.get('size')).toBe('10');
    req.flush(emptyPage);
  });

  it('list sends search as query param q when provided', () => {
    api.list('  acme  ', 2, 25).subscribe();
    const req = httpMock.expectOne((r) => r.url.split('?')[0].endsWith('/api/v1/customers'));
    expect(req.request.params.get('q')).toBe('acme');
    expect(req.request.params.get('page')).toBe('2');
    expect(req.request.params.get('size')).toBe('25');
    req.flush(emptyPage);
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
