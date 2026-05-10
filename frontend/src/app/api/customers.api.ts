import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APP_CONFIG } from '../core/config/app-config';

export interface CustomerResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  document: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerUpsertRequest {
  name: string;
  email: string;
  phone: string;
  document: string;
}

@Injectable({ providedIn: 'root' })
export class CustomersApi {
  constructor(private readonly http: HttpClient) {}

  list() {
    return this.http.get<CustomerResponse[]>(`${APP_CONFIG.apiBaseUrl}/api/v1/customers`);
  }

  get(id: string) {
    return this.http.get<CustomerResponse>(`${APP_CONFIG.apiBaseUrl}/api/v1/customers/${id}`);
  }

  create(payload: CustomerUpsertRequest) {
    return this.http.post<CustomerResponse>(`${APP_CONFIG.apiBaseUrl}/api/v1/customers`, payload);
  }

  update(id: string, payload: CustomerUpsertRequest) {
    return this.http.put<CustomerResponse>(`${APP_CONFIG.apiBaseUrl}/api/v1/customers/${id}`, payload);
  }

  delete(id: string) {
    return this.http.delete<void>(`${APP_CONFIG.apiBaseUrl}/api/v1/customers/${id}`);
  }
}
