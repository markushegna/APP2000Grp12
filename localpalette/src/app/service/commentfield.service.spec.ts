import { TestBed } from '@angular/core/testing';

import { CommentfieldService } from './commentfield.service';

describe('CommentfieldService', () => {
  let service: CommentfieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentfieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
