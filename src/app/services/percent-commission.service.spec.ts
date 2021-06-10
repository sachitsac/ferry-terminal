import { TestBed } from '@angular/core/testing';

import { PercentCommissionService } from './percent-commission.service';

describe('PercentCommissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PercentCommissionService = TestBed.get(PercentCommissionService);
    expect(service).toBeTruthy();
  });
});
