import { TestBed } from '@angular/core/testing';

import { GroqserviceService } from './groqservice.service';

describe('GroqserviceService', () => {
  let service: GroqserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroqserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
