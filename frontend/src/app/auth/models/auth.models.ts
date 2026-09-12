export interface SignupRequest {
  name: string;
  email: string;
  plainPassword: string;
  timezone: string;
  locale: string;
}

export interface LoginRequest {
  email: string;
  plainPassword: string;
}

export interface UserResponse {
  id: string;
  email: string;
  name: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface AuthMeResponse {
  user: AuthUser;
  memberships: [];
  activeHousehold: [];
}

export interface LoginResponse {
  message: string;
}

export interface AuthResponse {
  message: string;
}

// FIX: repeating interfaces
