import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APP_CONFIG } from '../core/config/app-config';

export interface ClientResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  document: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClientUpsertRequest {
  name: string;
  email: string;
  phone: string;
  document: string;
}

@Injectable({ providedIn: 'root' })
export class ClientsApi {
  constructor(private readonly http: HttpClient) {}

  list() {
    return this.http.get<ClientResponse[]>(`${APP_CONFIG.apiBaseUrl}/api/v1/clients`);
  }

  get(id: string) {
    return this.http.get<ClientResponse>(`${APP_CONFIG.apiBaseUrl}/api/v1/clients/${id}`);
  }

  create(payload: ClientUpsertRequest) {
    return this.http.post<ClientResponse>(`${APP_CONFIG.apiBaseUrl}/api/v1/clients`, payload);
  }

  update(id: string, payload: ClientUpsertRequest) {
    return this.http.put<ClientResponse>(`${APP_CONFIG.apiBaseUrl}/api/v1/clients/${id}`, payload);
  }

  delete(id: string) {
    return this.http.delete<void>(`${APP_CONFIG.apiBaseUrl}/api/v1/clients/${id}`);
  }
}
