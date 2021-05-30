import {TestBed} from '@angular/core/testing';

import {StjerneService} from './stjerne.service';

describe('StjerneService', () => {
  let service: StjerneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StjerneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
