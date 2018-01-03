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

  getFirstInvalidStep(step: string): string {
    // If all the previous steps are validated, return blank
    // Otherwise, return the first invalid step
    let found : boolean= false;
    let valid : boolean= true;
    let redirectToStep: string = '';
    for (let i: number = 0; i < this.formflow.length && !found && valid; i++) {
      let item = this.formflow[i];
      if (item.step === step) {
        found = true;
        redirectToStep = '';
      }
      else {
        valid = item.valid;
        redirectToStep = item.step
      }
    }
    return redirectToStep;
  }

}
