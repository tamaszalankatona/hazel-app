import { inject, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AuthMeResponse,
  AuthResponse,
  AuthUser,
  LoginRequest,
  LoginResponse,
  SignupRequest,
  UserResponse,
} from '../../auth/models/auth.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:3000/auth';

  // sign-up
  signUp(data: SignupRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.apiUrl}/sign-up`, data);
  }

  // login
  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, data, {
      withCredentials: true,
    });
  }

  // me
  me(): Observable<AuthMeResponse> {
    return this.http.get<AuthMeResponse>(`${this.apiUrl}/me`, {
      withCredentials: true,
    });
  }

  // logout
  logout(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/logout`,
      {},
      {
        withCredentials: true,
      },
    );
  }
}
