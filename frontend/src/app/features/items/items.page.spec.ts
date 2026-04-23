import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { ItemsPage } from './items.page';

describe('ItemsPage', () => {
  let fixture: ComponentFixture<ItemsPage>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsPage],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsPage);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('loads list on init', () => {
    fixture.detectChanges();
    const listReq = httpMock.expectOne((r) => r.url.endsWith('/api/v1/items'));
    listReq.flush([]);
    expect(fixture.componentInstance.items().length).toBe(0);
  });

  it('openEdit loads item via GET and sets selected + editForm', () => {
    fixture.detectChanges();
    httpMock.expectOne((r) => r.url.endsWith('/api/v1/items')).flush([
      { id: '1', name: 'A', description: null, ownerId: 'u' }
    ]);

    fixture.componentInstance.openEdit('1');
    const getReq = httpMock.expectOne((r) => r.url.endsWith('/api/v1/items/1'));
    getReq.flush({ id: '1', name: 'A', description: 'desc', ownerId: 'u' });

    expect(fixture.componentInstance.selected()?.id).toBe('1');
    expect(fixture.componentInstance.editForm.getRawValue().name).toBe('A');
    expect(fixture.componentInstance.editForm.getRawValue().description).toBe('desc');
  });

  it('clearSelection clears selected', () => {
    fixture.detectChanges();
    httpMock.expectOne((r) => r.url.endsWith('/api/v1/items')).flush([]);
    fixture.componentInstance.selected.set({
      id: '1',
      name: 'A',
      description: null,
      ownerId: 'u'
    });
    fixture.componentInstance.clearSelection();
    expect(fixture.componentInstance.selected()).toBeNull();
  });
});
