import { DOCUMENT } from '@angular/common';
import { Injectable, Signal, computed, inject, signal } from '@angular/core';

/** Persistido em `localStorage` (alinhar com `index.html`). */
export const THEME_STORAGE_KEY = 'fullstack.theme.preference';

export type ThemePreference = 'light' | 'dark' | 'system';

export const THEME_MENU_OPTIONS: ReadonlyArray<{
  value: ThemePreference;
  label: string;
  icon: string;
}> = [
  { value: 'light', label: 'Claro', icon: 'light_mode' },
  { value: 'dark', label: 'Escuro', icon: 'dark_mode' },
  { value: 'system', label: 'Seguir sistema', icon: 'brightness_auto' }
];

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
