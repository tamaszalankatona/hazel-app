import { inject, Injectable, signal } from '@angular/core';
import { AuthApiService } from '../../../api/auth/auth-api';
import {
  AuthMeResponse,
  AuthResponse,
  AuthUser,
  LoginRequest,
} from '../../../auth/models/auth.models';
import { Observable, switchMap, tap, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private readonly authApiService = inject(AuthApiService);
  readonly user = signal<AuthUser | null>(null);

  login(credentials: LoginRequest): Observable<AuthMeResponse> {
    return this.authApiService.login(credentials).pipe(
      switchMap(() => this.authApiService.me()),
      tap((response) => {
        this.user.set(response.user);
      }),
    );
  }

  restoreSession(): Observable<boolean> {
    return this.authApiService.me().pipe(
      tap((response) => {
        this.user.set(response.user);
      }),
      map(() => true),
      catchError((error) => {
        this.user.set(null);
        return of(false);
      }),
    );
  }

  logout(): Observable<AuthResponse> {
    return this.authApiService.logout().pipe(
      tap(() => {
        this.user.set(null);
      }),
    );
  }
}
