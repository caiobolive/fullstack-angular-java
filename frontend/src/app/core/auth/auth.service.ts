import { Injectable, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, throwError } from 'rxjs';

import { APP_CONFIG } from '../config/app-config';
import { AuthResponse, LoginRequest } from './auth.types';
import { TokenStorageService } from './token-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly accessTokenSig = signal<string | null>(null);

  readonly isAuthenticated = computed(() => !!this.accessTokenSig());

  constructor(
    private readonly http: HttpClient,
    private readonly tokenStorage: TokenStorageService
  ) {
    this.accessTokenSig.set(this.tokenStorage.getAccessToken());
  }

  getAccessToken(): string | null {
    return this.accessTokenSig();
  }

  login(request: LoginRequest) {
    return this.http
      .post<AuthResponse>(`${APP_CONFIG.apiBaseUrl}/api/v1/auth/login`, request)
      .pipe(tap((res) => this.setTokens(res.accessToken, res.refreshToken)));
  }

  refresh() {
    const refreshToken = this.tokenStorage.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    return this.http
      .post<AuthResponse>(`${APP_CONFIG.apiBaseUrl}/api/v1/auth/refresh`, { refreshToken })
      .pipe(tap((res) => this.setTokens(res.accessToken, res.refreshToken)));
  }

  logout(): void {
    this.tokenStorage.clear();
    this.accessTokenSig.set(null);
  }

  private setTokens(accessToken: string, refreshToken: string): void {
    this.tokenStorage.setTokens(accessToken, refreshToken);
    this.accessTokenSig.set(accessToken);
  }

  // Minimal JWT decoding (no verification client-side).
  getRoles(): string[] {
    const token = this.getAccessToken();
    if (!token) return [];
    const parts = token.split('.');
    if (parts.length !== 3) return [];
    try {
      const payloadJson = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));
      const payload = JSON.parse(payloadJson) as { roles?: string[] };
      return Array.isArray(payload.roles) ? payload.roles : [];
    } catch {
      return [];
    }
  }
}

