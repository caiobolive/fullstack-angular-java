import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { UsersPage } from './users.page';

describe('UsersPage', () => {
  let fixture: ComponentFixture<UsersPage>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPage],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersPage);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('loads users on init', () => {
    fixture.detectChanges();
    const req = httpMock.expectOne((r) => r.url.endsWith('/api/v1/users'));
    req.flush([]);
    expect(fixture.componentInstance.users().length).toBe(0);
  });
});
