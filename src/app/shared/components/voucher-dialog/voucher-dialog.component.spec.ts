import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherDialogComponent } from './voucher-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('VoucherDialogComponent', () => {
  let component: VoucherDialogComponent;
  let fixture: ComponentFixture<VoucherDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoucherDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(VoucherDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
