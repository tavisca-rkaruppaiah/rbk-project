import { TestBed } from '@angular/core/testing';

import { ReciepeService } from './reciepe.service';

describe('ReciepeService', () => {
  let service: ReciepeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciepeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
