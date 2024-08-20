import { TestBed } from '@angular/core/testing';

import { VoucherService } from './voucher.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('VoucherService', () => {
  let service: VoucherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(VoucherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
