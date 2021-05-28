import { TestBed } from '@angular/core/testing';

import { BedriftService } from './bedrift.service';

describe('ResturantService', () => {
  let service: BedriftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BedriftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
