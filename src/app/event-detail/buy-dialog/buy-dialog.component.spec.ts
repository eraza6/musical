import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyDialogComponent } from './buy-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('BuyDialogComponent', () => {
  let component: BuyDialogComponent;
  let fixture: ComponentFixture<BuyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { unitPrice: 0 } }, // Provide necessary data
        { provide: MatDialogRef, useValue: {} },
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BuyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
