import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { authInterceptor } from './core/auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    /**
     * Material + triggers `@angular/animations` (ex.: transições de rota).
     * `provideAnimationsAsync()` pode adiar o motor até ao lazy-load do chunk — as animações de rota ficavam impercetíveis.
     */
    provideAnimations(),
    provideRouter(routes, ...(environment.production ? [withHashLocation()] : [])),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
