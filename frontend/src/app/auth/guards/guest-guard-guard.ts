import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, catchError, of } from 'rxjs';
import { AuthStateService } from '../../services/state-services/auth-state/auth-state';

export const guestGuard: CanActivateFn = (route, state) => {
  const authState = inject(AuthStateService);
  const router = inject(Router);

  // Already authenticated in memory
  if (authState.user()) {
    return router.createUrlTree(['/overview']);
  }

  // Check whether a valid session exists after a refresh
  return authState.restoreSession().pipe(
    map((authenticated) => (authenticated ? router.createUrlTree(['/overview']) : true)),
    catchError(() => of(true)),
  );
};
