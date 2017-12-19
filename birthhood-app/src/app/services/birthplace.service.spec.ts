import { TestBed, inject } from '@angular/core/testing';

import { BirthplaceService } from './birthplace.service';

describe('BirthplaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BirthplaceService]
    });
  });

  it('should be created', inject([BirthplaceService], (service: BirthplaceService) => {
    expect(service).toBeTruthy();
  }));
});
