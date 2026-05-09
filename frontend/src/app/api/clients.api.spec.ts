import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { ClientsApi } from './clients.api';

describe('ClientsApi', () => {
  let api: ClientsApi;
  let httpMock: HttpTestingController;

  const sample = {
    id: '1',
    name: 'n',
    email: 'a@b.com',
    phone: '11999999999',
    document: '12345678901',
    ownerId: 'u1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsApi, provideHttpClient(), provideHttpClientTesting()]
    });
    api = TestBed.inject(ClientsApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('list calls GET /api/v1/clients', () => {
    api.list().subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients'));
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('create calls POST /api/v1/clients', () => {
    api.create({ name: 'n1', email: 'e@e.com', phone: '11', document: '12345678901' }).subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients'));
    expect(req.request.method).toBe('POST');
    expect(req.request.body.name).toBe('n1');
    req.flush(sample);
  });

  it('get calls GET /api/v1/clients/:id', () => {
    api.get('abc').subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients/abc'));
    expect(req.request.method).toBe('GET');
    req.flush(sample);
  });

  it('update calls PUT /api/v1/clients/:id', () => {
    api.update('abc', { name: 'x', email: 'x@x.com', phone: '11', document: '12345678901' }).subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients/abc'));
    expect(req.request.method).toBe('PUT');
    req.flush(sample);
  });

  it('delete calls DELETE /api/v1/clients/:id', () => {
    api.delete('abc').subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients/abc'));
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
