import { TestBed } from '@angular/core/testing';

import { FerryTerminalService } from './ferry-terminal.service';

describe('FerryTerminalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FerryTerminalService = TestBed.get(FerryTerminalService);
    expect(service).toBeTruthy();
  });
});
