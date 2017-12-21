import { TestBed, inject } from '@angular/core/testing';

import { FormFlowService } from './form-flow.service';

describe('FormFlowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormFlowService]
    });
  });

  it('should be created', inject([FormFlowService], (service: FormFlowService) => {
    expect(service).toBeTruthy();
  }));
});
