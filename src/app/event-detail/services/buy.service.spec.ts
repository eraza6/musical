import { TestBed } from '@angular/core/testing';

import { BuyService } from './buy.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('BuyService', () => {
  let service: BuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(BuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
