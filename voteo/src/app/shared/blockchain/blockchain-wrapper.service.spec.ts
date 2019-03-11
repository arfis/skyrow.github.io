import { TestBed } from '@angular/core/testing';

import { BlockchainWrapperService } from './blockchain-wrapper.service';

describe('BlockchainWrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockchainWrapperService = TestBed.get(BlockchainWrapperService);
    expect(service).toBeTruthy();
  });
});
