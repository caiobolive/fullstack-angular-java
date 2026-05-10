import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { authInterceptor } from './core/auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    /** Angular Material motion + eventual `@angular/animations` API — carrega o bundle async (Etapa 1). */
    provideAnimationsAsync(),
    provideRouter(routes, ...(environment.production ? [withHashLocation()] : [])),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
