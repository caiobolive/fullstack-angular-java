export type Role = 'ROLE_ADMIN' | 'ROLE_USER';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiresAt: string; // ISO
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RefreshRequest {
  refreshToken: string;
}

