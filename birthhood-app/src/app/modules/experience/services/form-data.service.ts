import { Injectable } from '@angular/core';

import { FormData, Bio, Umgebung, Emotional, Koerperlich, Mental, Wochenbett } from '../models/form-data';
import { FormSteps } from '../models/form-steps';
import { FormFlowService } from '../services/form-flow.service';
import { ExperienceService } from './experience.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/take";

@Injectable()
export class FormDataService {

  private formData: FormData = new FormData();
  private isBioFormValid: boolean = false;
  private isUmefeldFormValid: boolean = false;

  constructor(private formFlowService: FormFlowService, private experienceService: ExperienceService, private af: AngularFireAuth) {

  }

  saveToFirebase(): Promise<any> {
    let userObs = this.af.authState;
    //return new Promise((resolve) => {

    return userObs.take(1).toPromise().then(user => {

        this.formData.user_id = user.uid;
        return this.experienceService.save(this.formData)

      });
      //.then(docRef => resolve("geklappt " + docRef.id))
    //});

  }

  getBio(): Bio {
    var bio: Bio = {
      birth_name: this.formData.birth_name,
      birth_date: this.formData.birth_date,
      birth_type: this.formData.birth_type,
      birthplace: this.formData.birthplace
    }
    return bio;
  }

  setBio(data: Bio) {
    // Set Validation to true so we can proceed
    this.isBioFormValid = true;
    this.formData.birth_name = data.birth_name;
    this.formData.birth_date = data.birth_date;
    this.formData.birth_type = data.birth_type;
    this.formData.birthplace = data.birthplace;
    // Validate Bio Step in formFlow
    this.formFlowService.validateStep(FormSteps.bio);
  }

  getUmgebung(): Umgebung {
    var umgebung: Umgebung = {
      u1: this.formData.u1,
      u2: this.formData.u2,
      u3: this.formData.u3,
      u4: this.formData.u4,
      u5: this.formData.u5,
      u6: this.formData.u6,
      u7: this.formData.u7,
      u8: this.formData.u8,
    }
    return umgebung;
  }

  setUmgebung(data: Umgebung) {
    this.isUmefeldFormValid = true;
    this.formData.u1 = data.u1;
    this.formData.u2 = data.u2;
    this.formData.u3 = data.u3;
    this.formData.u4 = data.u4;
    this.formData.u5 = data.u5;
    this.formData.u6 = data.u6;
    this.formData.u7 = data.u7;
    this.formData.u8 = data.u8;
    this.formFlowService.validateStep(FormSteps.umgebung);
  }

  getEmotional(): Emotional {
    var emotional: Emotional = {
      e1: this.formData.e1,
      e2: this.formData.e2,
      e3: this.formData.e3,
      e4: this.formData.e4,
      e5: this.formData.e5,
      e6: this.formData.e6,
      e7: this.formData.e7,
      e8: this.formData.e8,
      e9: this.formData.e9,
    }
    return emotional;
  }

  setEmotional(data: Emotional) {
    this.isUmefeldFormValid = true;
    this.formData.e1 = data.e1;
    this.formData.e2 = data.e2;
    this.formData.e3 = data.e3;
    this.formData.e4 = data.e4;
    this.formData.e5 = data.e5;
    this.formData.e6 = data.e6;
    this.formData.e7 = data.e7;
    this.formData.e8 = data.e8;
    this.formData.e9 = data.e9;
    this.formFlowService.validateStep(FormSteps.emotional);
  }

  getKoerperlich(): Koerperlich {
    var koerperlich: Koerperlich = {
      k1: this.formData.k1,
      k2: this.formData.k2,
      k3: this.formData.k3,
      k4: this.formData.k4,
      k5: this.formData.k5,
      k6: this.formData.k6,
      k7: this.formData.k7,
      k8: this.formData.k8,
      k9: this.formData.k9,
      k10: this.formData.k10
    }
    return koerperlich;
  }

  setKoerperlich(data: Koerperlich) {
    this.isUmefeldFormValid = true;
    this.formData.k1 = data.k1;
    this.formData.k2 = data.k2;
    this.formData.k3 = data.k3;
    this.formData.k4 = data.k4;
    this.formData.k5 = data.k5;
    this.formData.k6 = data.k6;
    this.formData.k7 = data.k7;
    this.formData.k8 = data.k8;
    this.formData.k9 = data.k9;
    this.formData.k10 = data.k10;
    this.formFlowService.validateStep(FormSteps.koerperlich);
  }


  getMental(): Mental {
    var mental: Mental = {
      m1: this.formData.m1,
      m2: this.formData.m2,
      m3: this.formData.m3,
      m4: this.formData.m4,
      m5: this.formData.m5,

    }
    return mental;
  }

  setMental(data: Mental) {
    this.isUmefeldFormValid = true;
    this.formData.m1 = data.m1;
    this.formData.m2 = data.m2;
    this.formData.m3 = data.m3;
    this.formData.m4 = data.m4;
    this.formData.m5 = data.m5;

    this.formFlowService.validateStep(FormSteps.mental);
  }

  getWochenbett(): Wochenbett {
    var wochenbett: Wochenbett = {
      w1: this.formData.w1,
      w2: this.formData.w2,
      w3: this.formData.w3,
      w4: this.formData.w4,
      w5: this.formData.w5,

    }
    return wochenbett;
  }

  setWochenbett(data: Wochenbett) {
    this.isUmefeldFormValid = true;
    this.formData.w1 = data.w1;
    this.formData.w2 = data.w2;
    this.formData.w3 = data.w3;
    this.formData.w4 = data.w4;
    this.formData.w5 = data.w5;

    this.formFlowService.validateStep(FormSteps.wochenbett);
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
    this.isBioFormValid = false;
    return this.formData;
  }

  isFormValid() {
    // Return true if all forms had been validated successfully; otherwise, return false
    return this.isBioFormValid;
    // && this.isFormUFormValid && this.isFormBFormValid && .....

  }


}
