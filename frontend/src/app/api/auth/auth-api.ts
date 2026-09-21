import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AuthMeResponse,
  AuthResponse,
  LoginRequest,
  SignupRequest,
  UserResponse,
} from '../../auth/models/auth.models';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../constants/api.constants';
import { API_ENDPOINTS } from '../../constants/endpoints.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private readonly http = inject(HttpClient);

  // sign-up
  signUp(data: SignupRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(
      `${BASE_URL}${API_ENDPOINTS.auth.prefix}${API_ENDPOINTS.auth.signUp}`,
      data,
    );
  }

  // login
  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${BASE_URL}${API_ENDPOINTS.auth.prefix}${API_ENDPOINTS.auth.login}`,
      data,
      {
        withCredentials: true,
      },
    );
  }

  // me
  me(): Observable<AuthMeResponse> {
    return this.http.get<AuthMeResponse>(
      `${BASE_URL}${API_ENDPOINTS.auth.prefix}${API_ENDPOINTS.auth.me}`,
      {
        withCredentials: true,
      },
    );
  }

  // logout
  logout(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${BASE_URL}${API_ENDPOINTS.auth.prefix}${API_ENDPOINTS.auth.logout}`,
      {},
      {
        withCredentials: true,
      },
    );
  }
}
