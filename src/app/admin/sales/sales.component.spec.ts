import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { SalesComponent } from './sales.component';
import { SalesService } from './sales.service'; // Assuming SalesService is in the same directory
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('SalesComponent', () => {
  let component: SalesComponent;
  let fixture: ComponentFixture<SalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesComponent],
      providers: [
        SalesService,
        provideAnimationsAsync(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
