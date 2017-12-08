import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class BirthplaceService {

  birthplaceCollection;
  birthplacesId;
  constructor(private db: AngularFirestore) { 
    this.birthplaceCollection = db.collection('birthplaces');
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.birthplacesId = this.birthplaceCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getBirthplace(id: string){
      return this.birthplacesId.map(element => {
        return element.filter( x => x.id == id)}).mergeMap(x => x);
  }

  getBirthplaces(): Observable<any> {
    return this.birthplacesId;
  }

  recalculateScore(birthplaceId: string){
    //get all Experiences per Birthplaceid

    //calculate new Averages

    //update Birthplace-Record in Firebase
  }


}
