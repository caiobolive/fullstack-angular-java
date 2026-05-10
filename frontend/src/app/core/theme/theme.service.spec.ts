import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { THEME_STORAGE_KEY, ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.removeItem(THEME_STORAGE_KEY);
    document.documentElement.classList.remove('app-dark-theme');
  });

  afterEach(() => {
    localStorage.removeItem(THEME_STORAGE_KEY);
    document.documentElement.classList.remove('app-dark-theme');
  });

  it('usa sistema quando não há valor guardado', () => {
    TestBed.configureTestingModule({});
    const svc = TestBed.inject(ThemeService);
    expect(svc.preference()).toBe('system');
  });

  it('aplica classe app-dark-theme quando preferência é escuro', () => {
    TestBed.configureTestingModule({});
    const svc = TestBed.inject(ThemeService);
    svc.setPreference('dark');
    expect(document.documentElement.classList.contains('app-dark-theme')).toBe(true);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });

  it('remove classe quando preferência é claro', () => {
    TestBed.configureTestingModule({});
    const svc = TestBed.inject(ThemeService);
    svc.setPreference('dark');
    svc.setPreference('light');
    expect(document.documentElement.classList.contains('app-dark-theme')).toBe(false);
  });

  it('funciona com DOCUMENT injectado no TestBed', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: DOCUMENT, useFactory: () => document }]
    });
    const svc = TestBed.inject(ThemeService);
    svc.setPreference('dark');
    expect(svc.effectiveDark()).toBe(true);
  });
});
