import { Injectable } from '@angular/core';

import { FormSteps } from '../models/form-steps';

@Injectable()
export class FormFlowService {

  private formflow = [
    { step: FormSteps.personel, valid: false },
    // add missing steps
  ];

  validateStep(step: string) {
    // If the state is found, set the valid field to true 
    var found = false;
    for (var i = 0; i < this.formflow.length && !found; i++) {
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
    var found = false;
    var valid = true;
    var redirectToStep = '';
    for (var i = 0; i < this.formflow.length && !found && valid; i++) {
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
