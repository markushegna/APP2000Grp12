import { TestBed } from '@angular/core/testing';

import { BedriftserviceService } from './bedriftservice.service';

describe('BedriftserviceService', () => {
  let service: BedriftserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BedriftserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
