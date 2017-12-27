import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { BirthplaceService } from '../../../services/birthplace.service';

@Injectable()
export class ExperienceService {

  constructor(private db: AngularFirestore, private birthplaceService: BirthplaceService) { }

  save( experience: any )  {
    console.log(experience);
    this.db.collection("birthexperiences").add(experience)
      .then(function (docRef) {
        console.log(docRef.id);
      })
      .catch( function (error){
        console.log("There has been an error", error);
      });
  }


}
