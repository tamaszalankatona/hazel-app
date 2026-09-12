import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { map, catchError, of } from 'rxjs';
import { AuthStateService } from '../services/auth-state';

export const authGuard: CanActivateFn = (route, state) => {
  const authState = inject(AuthStateService);
  const router = inject(Router);

  return authState.restoreSession().pipe(
    map((isAuthenticated) => {
      return isAuthenticated ? true : router.createUrlTree(['/auth']);
    }),
    catchError((error) => {
      return of(router.createUrlTree(['/auth']));
    }),
  );
};
