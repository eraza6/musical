import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  DecodedToken,
  ForgotPasswordApiResponse,
  ForgotPasswordRequestBody,
  LoginApiResponse,
  LoginRequestBody,
  RegisterApiResponse,
  RegisterRequestBody,
} from '../models/auth.model';
import { Observable, catchError, of } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;
  private notificationsService = inject(NotificationsService);
  loading = signal(false);
  loggedIn = signal(false);
  isAdministrator = signal(false);
  userFullName = signal('');

  login(email: string, password: string): Observable<LoginApiResponse> {
    const apiUrl = this.baseUrl + '/api/users/login';
    const body: LoginRequestBody = { username: email, password };
    return this.http.post<LoginApiResponse>(apiUrl, body).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse: LoginApiResponse = {
          success: false,
          data: { expirationDate: '', token: '' },
          errorMessage: httpErrorResponse.error.errorMessage || 'Unknown error',
        };
        return of(errorResponse);
      })
    );
  }
  logout(jwtExpired = false) {
    localStorage.clear();
    this.loggedIn.set(false);
    this.isAdministrator.set(false);
    this.userFullName.set('');
    if (jwtExpired)
      this.notificationsService.error(
        'Sesión expirada',
        'Por favor inicia sesión de nuevo'
      );
    else this.notificationsService.success('Logout exitoso', 'Hasta luego');
  }

  isTokenExpired() {
    const token = localStorage.getItem('token');
    if (!token) return;

    const decoded = jwtDecode<DecodedToken>(token);
    const expirationDate = new Date(decoded.exp * 1000);
    return expirationDate < new Date();
  }

  verifyLocalStorage() {
    const token = localStorage.getItem('token');
    this.loggedIn.set(token ? true : false);

    if (!token) return;

    const decoded = jwtDecode<DecodedToken>(token);
    const jwtRole =
      decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    const jwtName =
      decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

    const isAdministrator = jwtRole === 'Administrator';
    this.isAdministrator.set(isAdministrator);
    this.userFullName.set(jwtName);
  }

  register(body: RegisterRequestBody): Observable<RegisterApiResponse> {
    const apiUrl = this.baseUrl + '/api/users/register';
    return this.http.post<RegisterApiResponse>(apiUrl, body).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse: RegisterApiResponse = {
          success: false,
          data: { expirationDate: '', token: '', userId: '' },
          errorMessage: httpErrorResponse.error.errorMessage || 'Unknown error',
        };
        return of(errorResponse);
      })
    );
  }

  forgotPassword(email: string): Observable<ForgotPasswordApiResponse> {
    const apiUrl = this.baseUrl + '/api/users/RequestTokenToResetPassword';
    const body: ForgotPasswordRequestBody = { email };
    return this.http.post<ForgotPasswordApiResponse>(apiUrl, body).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse: ForgotPasswordApiResponse = {
          success: false,
          errorMessage:
            httpErrorResponse.error?.errorMessage || 'Unknown error',
        };
        return of(errorResponse);
      })
    );
  }
}
