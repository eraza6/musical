import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { importProvidersFrom } from '@angular/core';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { provideRouter, withPreloading } from '@angular/router';
import { routes } from '../app.routes';
import { MyPreloadingStrategy } from '../preloading';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        importProvidersFrom(SimpleNotificationsModule.forRoot()),
        provideRouter(routes, withPreloading(MyPreloadingStrategy)),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
