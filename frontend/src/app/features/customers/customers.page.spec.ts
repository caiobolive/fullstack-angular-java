import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { CustomersPage } from './customers.page';

function isCustomersListRequest(url: string): boolean {
  return url.split('?')[0].endsWith('/api/v1/customers');
}

function searchParamFromRequestUrl(url: string, key: string): string | null {
  const query = url.includes('?') ? url.slice(url.indexOf('?') + 1) : '';
  return new URLSearchParams(query).get(key);
}

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

describe('CustomersPage', () => {
  let fixture: ComponentFixture<CustomersPage>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersPage],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersPage);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('loads list on init', () => {
    fixture.detectChanges();
    const listReq = httpMock.expectOne((r) => isCustomersListRequest(r.url));
    listReq.flush([]);
    expect(fixture.componentInstance.customers().length).toBe(0);
  });

  it('mostra aviso quando a lista está vazia após carregar', () => {
    fixture.detectChanges();
    httpMock.expectOne((r) => isCustomersListRequest(r.url)).flush([]);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Nenhum cliente cadastrado');
    expect(el.textContent).toContain('Cadastrar primeiro cliente');
  });

  it('pesquisa envia parâmetro q após debounce', fakeAsync(() => {
    fixture.detectChanges();
    httpMock.expectOne((r) => isCustomersListRequest(r.url)).flush([]);
    fixture.componentInstance.searchControl.setValue('acme');
    tick(350);
    const req = httpMock.expectOne((r) => {
      if (!isCustomersListRequest(r.url)) return false;
      const q = r.params.get('q') ?? searchParamFromRequestUrl(r.url, 'q');
      return q === 'acme';
    });
    req.flush([]);
  }));

  it('openEdit carrega via GET, abre o editor e preenche o formulário', () => {
    fixture.detectChanges();
    httpMock.expectOne((r) => isCustomersListRequest(r.url)).flush([sampleRow]);

    fixture.componentInstance.openEdit('1');
    expect(fixture.componentInstance.editorOpen()).toBe(false);

    const getReq = httpMock.expectOne((r) => r.url.endsWith('/api/v1/customers/1'));
    getReq.flush(sampleRow);

    expect(fixture.componentInstance.editorOpen()).toBe(true);
    expect(fixture.componentInstance.selected()?.id).toBe('1');
    const v = fixture.componentInstance.customerForm.getRawValue();
    expect(v.name).toBe('A');
    expect(v.email).toBe('a@b.com');
  });

  it('clearSelection fecha o editor e limpa selected', () => {
    fixture.detectChanges();
    httpMock.expectOne((r) => isCustomersListRequest(r.url)).flush([]);
    fixture.componentInstance.editorOpen.set(true);
    fixture.componentInstance.selected.set(sampleRow);
    fixture.componentInstance.clearSelection();
    expect(fixture.componentInstance.selected()).toBeNull();
    expect(fixture.componentInstance.editorOpen()).toBe(false);
  });

  it('openCreate abre o editor sem cliente selecionado', () => {
    fixture.detectChanges();
    httpMock.expectOne((r) => isCustomersListRequest(r.url)).flush([]);
    fixture.componentInstance.openCreate();
    expect(fixture.componentInstance.editorOpen()).toBe(true);
    expect(fixture.componentInstance.selected()).toBeNull();
  });
});
