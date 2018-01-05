import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { BirthplaceService } from '../../birthplace/services/birthplace.service';
import { Observable } from 'rxjs/Observable';
import { Experience } from '../models/experience-form-data';


@Injectable()
export class ExperienceService {

  constructor(private db: AngularFirestore, private birthplaceService: BirthplaceService) { }

  convertObject(data) {
    let obj = {}
    Object.keys(data).forEach(function (key, index) {
      obj[key] = data[key];
    });
    return obj;
  }

  save(experience: Experience): Promise<firebase.firestore.DocumentReference>  {
    return this.db.collection("birthexperiences").add(this.convertObject(experience))
  }

  getExperiencesByUserId(userId: string): Observable<Experience[]> {
    return <Observable<Experience[]>>this.db.collection("birthexperiences", ref => ref.where("user_id", "==", userId)).valueChanges();
  }


}
