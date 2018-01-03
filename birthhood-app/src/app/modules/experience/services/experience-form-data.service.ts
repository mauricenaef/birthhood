import { Injectable } from '@angular/core';

import { Experience, Bio, Umgebung, Emotional, Koerperlich, Mental, Wochenbett } from '../models/experience-form-data';
import { FormSteps } from '../models/form-steps';
import { FormFlowService } from '../services/form-flow.service';
import { ExperienceService } from './experience.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/take";

@Injectable()
export class FormDataService {

  private experience: Experience = new Experience();
  private isBioFormValid: boolean = false;
  private isUmefeldFormValid: boolean = false;

  constructor(private formFlowService: FormFlowService, private experienceService: ExperienceService, private af: AngularFireAuth) {

  }

  saveToFirebase(): Promise<any> {
    let userObs = this.af.authState;
    //return new Promise((resolve) => {

    return userObs.take(1).toPromise().then(user => {

        this.experience.user_id = user.uid;
        return this.experienceService.save(this.experience)

      });
      //.then(docRef => resolve("geklappt " + docRef.id))
    //});

  }

  getBio(): Bio {
    var bio: Bio = {
      birth_name: this.experience.birth_name,
      birth_date: this.experience.birth_date,
      birth_type: this.experience.birth_type,
      birthplace: {name: this.experience.birthplace,
      id: this.experience.birthplace_id},
    }
    return bio;
  }

  setBio(data: Bio) {
    // Set Validation to true so we can proceed
    this.isBioFormValid = true;
    this.experience.birth_name = data.birth_name;
    this.experience.birth_date = data.birth_date;
    this.experience.birth_type = data.birth_type;
    this.experience.birthplace_id = data.birthplace.id;
    this.experience.birthplace = data.birthplace.name;
    // Validate Bio Step in formFlow
    this.formFlowService.validateStep(FormSteps.bio);
  }

  getUmgebung(): Umgebung {
    var umgebung: Umgebung = {
      u1: this.experience.u1,
      u2: this.experience.u2,
      u3: this.experience.u3,
      u4: this.experience.u4,
      u5: this.experience.u5,
      u6: this.experience.u6,
      u7: this.experience.u7,
      u8: this.experience.u8,
    }
    return umgebung;
  }

  setUmgebung(data: Umgebung) {
    this.isUmefeldFormValid = true;
    this.experience.u1 = data.u1;
    this.experience.u2 = data.u2;
    this.experience.u3 = data.u3;
    this.experience.u4 = data.u4;
    this.experience.u5 = data.u5;
    this.experience.u6 = data.u6;
    this.experience.u7 = data.u7;
    this.experience.u8 = data.u8;
    this.formFlowService.validateStep(FormSteps.umgebung);
  }

  getEmotional(): Emotional {
    var emotional: Emotional = {
      e1: this.experience.e1,
      e2: this.experience.e2,
      e3: this.experience.e3,
      e4: this.experience.e4,
      e5: this.experience.e5,
      e6: this.experience.e6,
      e7: this.experience.e7,
      e8: this.experience.e8,
      e9: this.experience.e9,
    }
    return emotional;
  }

  setEmotional(data: Emotional) {
    this.isUmefeldFormValid = true;
    this.experience.e1 = data.e1;
    this.experience.e2 = data.e2;
    this.experience.e3 = data.e3;
    this.experience.e4 = data.e4;
    this.experience.e5 = data.e5;
    this.experience.e6 = data.e6;
    this.experience.e7 = data.e7;
    this.experience.e8 = data.e8;
    this.experience.e9 = data.e9;
    this.formFlowService.validateStep(FormSteps.emotional);
  }

  getKoerperlich(): Koerperlich {
    var koerperlich: Koerperlich = {
      k1: this.experience.k1,
      k2: this.experience.k2,
      k3: this.experience.k3,
      k4: this.experience.k4,
      k5: this.experience.k5,
      k6: this.experience.k6,
      k7: this.experience.k7,
      k8: this.experience.k8,
      k9: this.experience.k9,
      k10: this.experience.k10
    }
    return koerperlich;
  }

  setKoerperlich(data: Koerperlich) {
    this.isUmefeldFormValid = true;
    this.experience.k1 = data.k1;
    this.experience.k2 = data.k2;
    this.experience.k3 = data.k3;
    this.experience.k4 = data.k4;
    this.experience.k5 = data.k5;
    this.experience.k6 = data.k6;
    this.experience.k7 = data.k7;
    this.experience.k8 = data.k8;
    this.experience.k9 = data.k9;
    this.experience.k10 = data.k10;
    this.formFlowService.validateStep(FormSteps.koerperlich);
  }


  getMental(): Mental {
    var mental: Mental = {
      m1: this.experience.m1,
      m2: this.experience.m2,
      m3: this.experience.m3,
      m4: this.experience.m4,
      m5: this.experience.m5,

    }
    return mental;
  }

  setMental(data: Mental) {
    this.isUmefeldFormValid = true;
    this.experience.m1 = data.m1;
    this.experience.m2 = data.m2;
    this.experience.m3 = data.m3;
    this.experience.m4 = data.m4;
    this.experience.m5 = data.m5;

    this.formFlowService.validateStep(FormSteps.mental);
  }

  getWochenbett(): Wochenbett {
    var wochenbett: Wochenbett = {
      w1: this.experience.w1,
      w2: this.experience.w2,
      w3: this.experience.w3,
      w4: this.experience.w4,
      w5: this.experience.w5,

    }
    return wochenbett;
  }

  setWochenbett(data: Wochenbett) {
    this.isUmefeldFormValid = true;
    this.experience.w1 = data.w1;
    this.experience.w2 = data.w2;
    this.experience.w3 = data.w3;
    this.experience.w4 = data.w4;
    this.experience.w5 = data.w5;

    this.formFlowService.validateStep(FormSteps.wochenbett);
  }



  getExperience(): Experience {
    // Return the entire Form Data
    return this.experience;
  }

  resetExperience(): Experience {
    // Reset the workflow
    this.formFlowService.resetSteps();
    // Return the form data after all this.* members had been reset
    this.experience.clear();
    // Add all private Methods to set Validation
    this.isBioFormValid = false;
    return this.experience;
  }

  isFormValid() {
    // Return true if all forms had been validated successfully; otherwise, return false
    return this.isBioFormValid;
    // && this.isFormUFormValid && this.isFormBFormValid && .....

  }


}
