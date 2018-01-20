import { Injectable } from '@angular/core';

import { FormSteps } from '../models/form-steps';

@Injectable()
export class FormFlowService {

  private formflow = [
    { step: FormSteps.bio, valid: false },
    { step: FormSteps.umgebung, valid: false },
    { step: FormSteps.emotional, valid: false },
    { step: FormSteps.koerperlich, valid: false },
    { step: FormSteps.mental, valid: false },
    { step: FormSteps.wochenbett, valid: false }
  ];

  validateStep(step: string) {
    // If the state is found, set the valid field to true 
    let found: boolean = false;
    for (let i: number = 0; i < this.formflow.length && !found; i++) {
      if (this.formflow[i].step === step) {
        found = this.formflow[i].valid = true;
      }
    }
  }

  resetSteps() {
    // Reset all the steps in the FormFlow to be invalid
    this.formflow.forEach(element => {
      element.valid = false;
    });
  }

}
