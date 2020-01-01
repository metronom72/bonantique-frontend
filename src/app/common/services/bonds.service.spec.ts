import { TestBed } from '@angular/core/testing';

import { BondsService } from './bonds.service';

describe('BondsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BondsService = TestBed.get(BondsService);
    expect(service).toBeTruthy();
  });
});
