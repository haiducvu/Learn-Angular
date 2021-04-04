import { TestBed } from '@angular/core/testing';

import { TransformServiceService } from './transform-service.service';

describe('TransformServiceService', () => {
  let service: TransformServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
