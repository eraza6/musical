import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { importProvidersFrom } from '@angular/core';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        importProvidersFrom(SimpleNotificationsModule.forRoot()),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
