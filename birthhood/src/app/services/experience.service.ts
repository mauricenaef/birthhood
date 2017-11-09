import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ExperienceService {

  constructor(private db: AngularFirestore) {


  }

  public addExperience(){
    this.db.collection("experiences").add({
      child_name: "Los Angeles" + Date.now().toString()
    })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }
/*
  createNewExperience(experience: Experience){

  }
*/
}
