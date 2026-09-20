import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, catchError, of } from 'rxjs';
import { AuthStateService } from '../../services/state-services/auth-state/auth-state';

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
