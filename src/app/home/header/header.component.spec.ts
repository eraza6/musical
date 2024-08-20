import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter, withPreloading } from '@angular/router';
import { routes } from '../../app.routes';
import { MyPreloadingStrategy } from '../../preloading';
import { importProvidersFrom } from '@angular/core';
import { SimpleNotificationsModule } from 'angular2-notifications';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter(routes, withPreloading(MyPreloadingStrategy)),
        importProvidersFrom(SimpleNotificationsModule.forRoot()),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
