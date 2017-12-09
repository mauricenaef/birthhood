import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class BirthplaceService {

  birthplaceCollection;
  birthplaces;

  constructor(private db: AngularFirestore) { 

    this.birthplaceCollection = this.db.collection('birthplaces');
    /*this.birthplaces = this.birthplaceCollection.snapshotChanges().map(actions => {
      return this.birthplaceCollection.snapshotChanges().map(actions => {
        return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });*/
  }

  ngOnInit(){
  }

  getBirthplace(id: string): Observable<any>{
    var docRef = this.db.collection('birthplaces').doc(id);
    return docRef.valueChanges();
      /*return this.birthplaces.map(element => {
        return element.filter( x => x.id == id)}).mergeMap(x => x);*/
  }

  getBirthplaces(): Observable<any> {
    return this.birthplaceCollection.snapshotChanges().map(actions => {
        return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  recalculateScore(birthplaceId: string){
    //get all Experiences per Birthplaceid

    //calculate new Averages

    //update Birthplace-Record in Firebase
  }


}
