import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { BirthplaceService } from '../../../services/birthplace.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ExperienceService {

  constructor(private db: AngularFirestore, private birthplaceService: BirthplaceService) { }

  convertObject(data) {
    var obj = {}
    Object.keys(data).forEach(function(key,index) {
        //console.log(key);
        obj[key] = data[key];
    });
    return obj;
  }

  save( experience: any )  {
    console.log(experience);
    this.db.collection("birthexperiences").add(this.convertObject(experience))
      .then(function (docRef) {
        console.log(docRef.id);
      })
      .catch( function (error){
        console.log("There has been an error", error);
      });
  }

  getExperiencesByUserId( userId: string ): Observable<any> {
    console.log("experience-service", userId);
    return this.db.collection("birthexperiences", ref => ref.where("user_id", "==" , userId)).valueChanges();
  }


}
