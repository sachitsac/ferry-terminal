import { TestBed } from '@angular/core/testing';

import { StoreBaseService } from './store-base.service';

describe('StoreBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreBaseService = TestBed.get(StoreBaseService);
    expect(service).toBeTruthy();
  });
});
