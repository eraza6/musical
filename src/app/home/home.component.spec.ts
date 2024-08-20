import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { homeReducer } from './store/home.reducer';
import { provideStore } from '@ngrx/store';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { provideRouter, withPreloading } from '@angular/router';
import { routes } from '../app.routes';
import { MyPreloadingStrategy } from '../preloading';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideStore({ home: homeReducer }),
        provideHttpClient(),
        provideHttpClientTesting(),
        importProvidersFrom(SimpleNotificationsModule.forRoot()),
        provideRouter(routes, withPreloading(MyPreloadingStrategy)),
        provideAnimationsAsync(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
