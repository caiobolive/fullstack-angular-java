import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { ClientsPage } from './clients.page';

const sampleRow = {
  id: '1',
  name: 'A',
  email: 'a@b.com',
  phone: '11999999999',
  document: '12345678901',
  ownerId: 'u',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

describe('ClientsPage', () => {
  let fixture: ComponentFixture<ClientsPage>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsPage],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsPage);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('loads list on init', () => {
    fixture.detectChanges();
    const listReq = httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients'));
    listReq.flush([]);
    expect(fixture.componentInstance.clients().length).toBe(0);
  });

  it('openEdit loads client via GET and sets selected + editForm', () => {
    fixture.detectChanges();
    httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients')).flush([sampleRow]);

    fixture.componentInstance.openEdit('1');
    const getReq = httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients/1'));
    getReq.flush(sampleRow);

    expect(fixture.componentInstance.selected()?.id).toBe('1');
    const v = fixture.componentInstance.editForm.getRawValue();
    expect(v.name).toBe('A');
    expect(v.email).toBe('a@b.com');
  });

  it('clearSelection clears selected', () => {
    fixture.detectChanges();
    httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients')).flush([]);
    fixture.componentInstance.selected.set(sampleRow);
    fixture.componentInstance.clearSelection();
    expect(fixture.componentInstance.selected()).toBeNull();
  });
});
