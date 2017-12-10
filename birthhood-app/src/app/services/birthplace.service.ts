import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { LatLngBounds } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { MarkerAGM } from '../models/marker-agm';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BirthplaceService {

  birthplaceCollection;
  displayedBounds: LatLngBounds;

  private boundsUpdatedSource = new Subject<LatLngBounds>();
  boundsUpdated$ = this.boundsUpdatedSource.asObservable();

  constructor(private db: AngularFirestore) {
    this.birthplaceCollection = this.db.collection('birthplaces');
  }

  ngOnInit() {
  }

  getBirthplace(id: string): Observable<any> {
    var docRef = this.db.collection('birthplaces').doc(id);
    return docRef.valueChanges();
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

  getDisplayedBirthplaces(bounds: LatLngBounds): Observable<any> {

    return this.getBirthplaces().map(actions => {
      return actions.filter(item => {
        let latLng = new MarkerAGM();
        latLng.constructor(item.lat, item.lng);
        return bounds.contains(latLng);
      })
    }
    );
  }

  updateBounds($event: LatLngBounds) {
    this.displayedBounds = $event ? $event : this.displayedBounds;
    this.boundsUpdatedSource.next(this.displayedBounds);
  }

  recalculateScore(birthplaceId: string) {
    //get all Experiences per Birthplaceid

    //calculate new Averages

    //update Birthplace-Record in Firebase
  }


}
