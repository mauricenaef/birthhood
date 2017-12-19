import { Injectable } from '@angular/core';

import { FormData, Personel, Umfeld } from '../models/form-data';
import { FormSteps } from '../models/form-steps';
import { FormFlowService } from '../services/form-flow.service';

@Injectable()
export class FormDataService {

  private formData: FormData = new FormData();
  private isPersonelFormValid: boolean = false;
  private isUmefeldFormValid: boolean = false;

  constructor(private formFlowService: FormFlowService) {
  }

  getPersonel(): Personel {
    var personel: Personel = {
      birth_name: this.formData.birth_name,
      birth_date: this.formData.birth_date,
      birth_type: this.formData.birth_type
    }
    return personel;
  }

  setPersonel(data: Personel) {
    // Set Validation to true so we can proceed
    this.isPersonelFormValid = true;
    this.formData.birth_name = data.birth_name;
    this.formData.birth_date = data.birth_date;
    this.formData.birth_type = data.birth_type;
    // Validate Personel Step in formFlow
    this.formFlowService.validateStep(FormSteps.personel);
  }

  getUmfeld(): Umfeld {
    var umfeld: Umfeld = {
      u1: this.formData.u1,
      u2: this.formData.u2
    }
    return umfeld;
  }

  setUmfeld(data: Umfeld) {
    this.isUmefeldFormValid = true;
    this.formData.u1 = data.u1;
    this.formData.u2 = data.u2;

    this.formFlowService.validateStep(FormSteps.umfeld);
  }



  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
  }

  resetFormData(): FormData {
    // Reset the workflow
    this.formFlowService.resetSteps();
    // Return the form data after all this.* members had been reset
    this.formData.clear();
    // Add all private Methods to set Validation
    this.isPersonelFormValid  = false;
    return this.formData;
  }

  isFormValid() {
    // Return true if all forms had been validated successfully; otherwise, return false
    return this.isPersonelFormValid;
    // && this.isFormUFormValid && this.isFormBFormValid && .....

  }


}
