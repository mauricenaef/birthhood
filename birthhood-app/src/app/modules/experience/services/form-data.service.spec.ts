import { TestBed, inject } from '@angular/core/testing';

import { FormDataService } from './experience-form-data.service';

describe('FormDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormDataService]
    });
  });

  it('should be created', inject([FormDataService], (service: FormDataService) => {
    expect(service).toBeTruthy();
  }));
});
