import { inject, Injectable, signal } from '@angular/core';
import { AuthService } from './auth';
import { AuthMeResponse, AuthResponse, AuthUser, LoginRequest } from '../models/auth.models';
import { Observable, switchMap, tap, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private readonly authService = inject(AuthService);
  readonly user = signal<AuthUser | null>(null);

  login(credentials: LoginRequest): Observable<AuthMeResponse> {
    return this.authService.login(credentials).pipe(
      switchMap(() => this.authService.me()),
      tap((response) => {
        this.user.set(response.user);
      }),
    );
  }

  restoreSession(): Observable<boolean> {
    return this.authService.me().pipe(
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
    return this.authService.logout().pipe(
      tap(() => {
        this.user.set(null);
      }),
    );
  }
}
