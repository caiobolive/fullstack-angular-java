import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APP_CONFIG } from '../core/config/app-config';

export interface UserResponse {
  id: string;
  email: string;
  enabled: boolean;
  roles: string[];
  createdAt: string;
  updatedAt: string;
}

export interface UserCreateRequest {
  email: string;
  password: string;
  roles: string[];
}

export interface UserUpdateRequest {
  enabled: boolean;
  roles: string[];
}

@Injectable({ providedIn: 'root' })
export class UsersApi {
  constructor(private readonly http: HttpClient) {}

  list() {
    return this.http.get<UserResponse[]>(`${APP_CONFIG.apiBaseUrl}/api/v1/users`);
  }

  create(payload: UserCreateRequest) {
    return this.http.post<UserResponse>(`${APP_CONFIG.apiBaseUrl}/api/v1/users`, payload);
  }

  update(id: string, payload: UserUpdateRequest) {
    return this.http.patch<UserResponse>(`${APP_CONFIG.apiBaseUrl}/api/v1/users/${id}`, payload);
  }
}
