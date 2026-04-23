import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { ItemsApi } from './items.api';

describe('ItemsApi', () => {
  let api: ItemsApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsApi, provideHttpClient(), provideHttpClientTesting()]
    });
    api = TestBed.inject(ItemsApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('list calls GET /api/v1/items', () => {
    api.list().subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/items'));
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('create calls POST /api/v1/items', () => {
    api.create({ name: 'n1', description: null }).subscribe();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/items'));
    expect(req.request.method).toBe('POST');
    expect(req.request.body.name).toBe('n1');
    req.flush({ id: '1', name: 'n1', description: null, ownerId: 'u1' });
  });
});

