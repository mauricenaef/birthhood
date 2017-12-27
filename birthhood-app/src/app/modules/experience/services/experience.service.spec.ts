import { TestBed, inject } from '@angular/core/testing';

import { ExperienceService } from './experience.service';

describe('ExperienceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExperienceService]
    });
  });

  it('should be created', inject([ExperienceService], (service: ExperienceService) => {
    expect(service).toBeTruthy();
  }));
});
