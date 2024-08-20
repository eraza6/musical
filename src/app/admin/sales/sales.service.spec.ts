import { TestBed } from '@angular/core/testing';

import { SalesService } from './sales.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SalesService', () => {
  let service: SalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(SalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
