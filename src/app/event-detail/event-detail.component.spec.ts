import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailComponent } from './event-detail.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withPreloading } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { routes } from '../app.routes';
import { MyPreloadingStrategy } from '../preloading';

describe('EventDetailComponent', () => {
  let component: EventDetailComponent;
  let fixture: ComponentFixture<EventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDetailComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        importProvidersFrom(SimpleNotificationsModule.forRoot()),
        provideRouter(routes, withPreloading(MyPreloadingStrategy)),
        provideAnimationsAsync(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
