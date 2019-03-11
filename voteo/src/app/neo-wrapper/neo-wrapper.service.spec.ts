import { TestBed } from '@angular/core/testing';

import { NeoWrapperService } from './neo-wrapper.service';

describe('NeoWrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeoWrapperService = TestBed.get(NeoWrapperService);
    expect(service).toBeTruthy();
  });
});
