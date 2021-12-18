import { TestBed } from '@angular/core/testing';

import { FirebaseRtDbService } from './firebase-rt-db.service';

describe('FirebaseRtDbService', () => {
  let service: FirebaseRtDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseRtDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
