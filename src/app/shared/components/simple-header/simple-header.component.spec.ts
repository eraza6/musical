import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHeaderComponent } from './simple-header.component';
import { provideRouter, withPreloading } from '@angular/router';
import { routes } from '../../../app.routes';
import { MyPreloadingStrategy } from '../../../preloading';

describe('SimpleHeaderComponent', () => {
  let component: SimpleHeaderComponent;
  let fixture: ComponentFixture<SimpleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleHeaderComponent],
      providers: [provideRouter(routes, withPreloading(MyPreloadingStrategy))],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
