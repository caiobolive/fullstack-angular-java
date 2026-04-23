import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APP_CONFIG } from '../core/config/app-config';

export interface ItemResponse {
  id: string;
  name: string;
  description: string | null;
  ownerId: string;
}

export interface ItemUpsertRequest {
  name: string;
  description?: string | null;
}

@Injectable({ providedIn: 'root' })
export class ItemsApi {
  constructor(private readonly http: HttpClient) {}

  list() {
    return this.http.get<ItemResponse[]>(`${APP_CONFIG.apiBaseUrl}/api/v1/items`);
  }

  get(id: string) {
    return this.http.get<ItemResponse>(`${APP_CONFIG.apiBaseUrl}/api/v1/items/${id}`);
  }

  create(payload: ItemUpsertRequest) {
    return this.http.post<ItemResponse>(`${APP_CONFIG.apiBaseUrl}/api/v1/items`, payload);
  }

  update(id: string, payload: ItemUpsertRequest) {
    return this.http.put<ItemResponse>(`${APP_CONFIG.apiBaseUrl}/api/v1/items/${id}`, payload);
  }

  delete(id: string) {
    return this.http.delete<void>(`${APP_CONFIG.apiBaseUrl}/api/v1/items/${id}`);
  }
}

