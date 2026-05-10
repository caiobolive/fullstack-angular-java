import { DOCUMENT } from '@angular/common';
import { TestBed, fakeAsync, flush } from '@angular/core/testing';

import { THEME_STORAGE_KEY, ThemeService, cssColorValueToHex } from './theme.service';

describe('cssColorValueToHex', () => {
  it('converte #RGB e #RRGGBB', () => {
    expect(cssColorValueToHex('#aBc')).toBe('#aabbcc');
    expect(cssColorValueToHex('#1a2b3c')).toBe('#1a2b3c');
  });

  it('converte rgb()', () => {
    expect(cssColorValueToHex('rgb(10, 20, 30)')).toBe('#0a141e');
    expect(cssColorValueToHex('rgba(255, 0, 128, 0.5)')).toBe('#ff0080');
  });

  it('devolve null para vazio ou formato desconhecido', () => {
    expect(cssColorValueToHex('')).toBeNull();
    expect(cssColorValueToHex('color(srgb 0.1 0.2 0.3)')).toBeNull();
  });
});

describe('ThemeService', () => {
  function ensureThemeColorMeta(): HTMLMetaElement {
    let meta = document.getElementById('app-theme-color') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.id = 'app-theme-color';
      meta.name = 'theme-color';
      meta.content = '#0078d4';
      document.head.appendChild(meta);
    }
    return meta;
  }

  beforeEach(fakeAsync(() => {
    localStorage.removeItem(THEME_STORAGE_KEY);
    document.documentElement.classList.remove('app-dark-theme');
    ensureThemeColorMeta();
    TestBed.configureTestingModule({
      providers: [{ provide: DOCUMENT, useFactory: () => document }]
    });
    TestBed.inject(ThemeService).setPreference('system');
    flush();
  }));

  afterEach(() => {
    localStorage.removeItem(THEME_STORAGE_KEY);
    document.documentElement.classList.remove('app-dark-theme');
  });

  it(
    'usa sistema quando não há valor guardado',
    fakeAsync(() => {
      const svc = TestBed.inject(ThemeService);
      flush();
      expect(svc.preference()).toBe('system');
    })
  );

  it(
    'aplica classe app-dark-theme quando preferência é escuro',
    fakeAsync(() => {
      const svc = TestBed.inject(ThemeService);
      flush();
      svc.setPreference('dark');
      flush();
      expect(document.documentElement.classList.contains('app-dark-theme')).toBe(true);
      expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
    })
  );

  it(
    'remove classe quando preferência é claro',
    fakeAsync(() => {
      const svc = TestBed.inject(ThemeService);
      flush();
      svc.setPreference('dark');
      flush();
      svc.setPreference('light');
      flush();
      expect(document.documentElement.classList.contains('app-dark-theme')).toBe(false);
    })
  );

  it(
    'effectiveDark reflete escuro após setPreference',
    fakeAsync(() => {
      const svc = TestBed.inject(ThemeService);
      flush();
      svc.setPreference('dark');
      flush();
      expect(svc.effectiveDark()).toBe(true);
    })
  );

  it(
    'atualiza meta theme-color para valor em # após aplicar tema',
    fakeAsync(() => {
      const svc = TestBed.inject(ThemeService);
      flush();
      const meta = ensureThemeColorMeta();
      svc.setPreference('light');
      flush();
      expect(meta.getAttribute('content')).toMatch(/^#[0-9a-f]{6}$/);
    })
  );
});
