import { TestBed } from '@angular/core/testing';

import { EventDetailService } from './event-detail.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('EventDetailService', () => {
  let service: EventDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(EventDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
