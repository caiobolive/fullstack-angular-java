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

  it('mostra aviso quando a lista está vazia após carregar', () => {
    fixture.detectChanges();
    httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients')).flush([]);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Nenhum cliente cadastrado');
    expect(el.textContent).toContain('Cadastrar primeiro cliente');
  });

  it('openEdit carrega via GET, abre o editor e preenche o formulário', () => {
    fixture.detectChanges();
    httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients')).flush([sampleRow]);

    fixture.componentInstance.openEdit('1');
    expect(fixture.componentInstance.editorOpen()).toBe(false);

    const getReq = httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients/1'));
    getReq.flush(sampleRow);

    expect(fixture.componentInstance.editorOpen()).toBe(true);
    expect(fixture.componentInstance.selected()?.id).toBe('1');
    const v = fixture.componentInstance.clientForm.getRawValue();
    expect(v.name).toBe('A');
    expect(v.email).toBe('a@b.com');
  });

  it('clearSelection fecha o editor e limpa selected', () => {
    fixture.detectChanges();
    httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients')).flush([]);
    fixture.componentInstance.editorOpen.set(true);
    fixture.componentInstance.selected.set(sampleRow);
    fixture.componentInstance.clearSelection();
    expect(fixture.componentInstance.selected()).toBeNull();
    expect(fixture.componentInstance.editorOpen()).toBe(false);
  });

  it('openCreate abre o editor sem cliente selecionado', () => {
    fixture.detectChanges();
    httpMock.expectOne((r) => r.url.endsWith('/api/v1/clients')).flush([]);
    fixture.componentInstance.openCreate();
    expect(fixture.componentInstance.editorOpen()).toBe(true);
    expect(fixture.componentInstance.selected()).toBeNull();
  });

});
