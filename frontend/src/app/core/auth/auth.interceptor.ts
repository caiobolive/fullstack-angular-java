import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize, map, shareReplay, switchMap, throwError, type Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

let refreshInFlight$: Observable<string> | null = null;

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const tokenStorage = inject(TokenStorageService);

  const accessToken = auth.getAccessToken();
  const isAuthEndpoint = req.url.includes('/api/v1/auth/');

  const authReq =
    accessToken && !isAuthEndpoint
      ? req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } })
      : req;

  return next(authReq).pipe(
    catchError((err: unknown) => {
      if (!(err instanceof HttpErrorResponse)) return throwError(() => err);
      if (err.status !== 401) return throwError(() => err);
      if (isAuthEndpoint) return throwError(() => err);

      const refreshToken = tokenStorage.getRefreshToken();
      if (!refreshToken) {
        auth.logout();
        return throwError(() => err);
      }

      if (!refreshInFlight$) {
        refreshInFlight$ = auth.refresh().pipe(
          map(() => auth.getAccessToken() ?? ''),
          finalize(() => {
            refreshInFlight$ = null;
          }),
          shareReplay({ bufferSize: 1, refCount: false })
        );
      }

      return refreshInFlight$.pipe(
        switchMap((newAccessToken) => {
          if (!newAccessToken) {
            auth.logout();
            return throwError(() => err);
          }
          return next(req.clone({ setHeaders: { Authorization: `Bearer ${newAccessToken}` } }));
        })
      );
    })
  );
};

