import { DOCUMENT } from '@angular/common';
import { Injectable, Signal, computed, inject, signal } from '@angular/core';

/** Persistido em `localStorage` (alinhar com `index.html`). */
export const THEME_STORAGE_KEY = 'fullstack.theme.preference';

export type ThemePreference = 'light' | 'dark' | 'system';

/** Quando o browser não expõe `--mat-sys-primary` como rgb/# (meta só aceita cores simples). */
const THEME_COLOR_FALLBACK_LIGHT = '#0078d4';
const THEME_COLOR_FALLBACK_DARK = '#89bcff';

export const THEME_MENU_OPTIONS: ReadonlyArray<{
  value: ThemePreference;
  label: string;
  icon: string;
}> = [
  { value: 'light', label: 'Claro', icon: 'light_mode' },
  { value: 'dark', label: 'Escuro', icon: 'dark_mode' },
  { value: 'system', label: 'Seguir sistema', icon: 'brightness_auto' }
];

/**
 * Converte valor CSS típico (`#rgb`, `#rrggbb`, `rgb()/rgba()`) para `#rrggbb`.
 * Devolve `null` para formatos não suportados (ex.: `color(srgb …)`).
 */
export function cssColorValueToHex(input: string): string | null {
  const v = input.trim();
  if (!v) return null;
  if (v.startsWith('#')) {
    if (/^#[0-9a-fA-F]{6}$/.test(v)) return v.toLowerCase();
    if (/^#[0-9a-fA-F]{3}$/.test(v)) {
      const [, r, g, b] = v;
      return `#${r}${r}${g}${g}${b}${b}`.toLowerCase();
    }
    return null;
  }
  const rgb = v.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/);
  if (rgb) {
    const r = clamp255(Number(rgb[1]));
    const g = clamp255(Number(rgb[2]));
    const b = clamp255(Number(rgb[3]));
    return `#${toHex2(r)}${toHex2(g)}${toHex2(b)}`;
  }
  return null;
}

function clamp255(n: number): number {
  return Math.max(0, Math.min(255, Math.round(n)));
}

function toHex2(n: number): string {
  return n.toString(16).padStart(2, '0');
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);

  readonly preference: Signal<ThemePreference>;

  /** Paleta efetiva após resolver `system` + media query. */
  readonly effectiveDark: Signal<boolean>;

  private readonly preferenceWritable = signal<ThemePreference>(this.readStoredPreference());
  /** Invalida o `computed` quando o SO muda esquema em modo `system`. */
  private readonly colorSchemeTick = signal(0);

  constructor() {
    this.preference = this.preferenceWritable.asReadonly();
    this.effectiveDark = computed(() => {
      void this.colorSchemeTick();
      return this.computeEffectiveDark(this.preferenceWritable());
    });

    globalThis.matchMedia?.('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (this.preferenceWritable() === 'system') {
        this.colorSchemeTick.update((n) => n + 1);
        this.syncDomAndStorage();
      }
    });

    this.syncDomAndStorage();
  }

  setPreference(pref: ThemePreference): void {
    this.preferenceWritable.set(pref);
    this.syncDomAndStorage();
  }

  private syncDomAndStorage(): void {
    const dark = this.computeEffectiveDark(this.preferenceWritable());
    try {
      localStorage.setItem(THEME_STORAGE_KEY, this.preferenceWritable());
    } catch {
      /* modo privado / quota */
    }
    this.doc.documentElement.classList.toggle('app-dark-theme', dark);
    this.scheduleThemeColorMetaUpdate();
  }

  /** Duplo `rAF` para o tema Material aplicar tokens antes de ler `--mat-sys-primary`. */
  private scheduleThemeColorMetaUpdate(): void {
    const win = this.doc.defaultView;
    if (!win) return;
    win.requestAnimationFrame(() => {
      win.requestAnimationFrame(() => this.applyThemeColorMeta());
    });
  }

  private applyThemeColorMeta(): void {
    const meta = this.doc.getElementById('app-theme-color') as HTMLMetaElement | null;
    if (!meta) return;
    const win = this.doc.defaultView;
    if (!win) return;
    const raw = win.getComputedStyle(this.doc.documentElement).getPropertyValue('--mat-sys-primary').trim();
    const hex =
      cssColorValueToHex(raw) ??
      (this.computeEffectiveDark(this.preferenceWritable()) ? THEME_COLOR_FALLBACK_DARK : THEME_COLOR_FALLBACK_LIGHT);
    meta.setAttribute('content', hex);
  }

  private computeEffectiveDark(pref: ThemePreference): boolean {
    if (pref === 'dark') return true;
    if (pref === 'light') return false;
    return !!globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches;
  }

  private readStoredPreference(): ThemePreference {
    try {
      const raw = localStorage.getItem(THEME_STORAGE_KEY);
      if (raw === 'light' || raw === 'dark' || raw === 'system') return raw;
    } catch {
      /* sem storage */
    }
    return 'system';
  }
}
