import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { LatLngBounds } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { MarkerAGM } from '../models/marker-agm';
import { Subject } from 'rxjs/Subject';
import { BirthplaceFilter } from '../models/birthplace-filter';

@Injectable()
export class BirthplaceService {

  birthplaceCollection;
  displayedBounds: LatLngBounds;
  displayedBirthplaces$:  Observable<any>;
  filter: BirthplaceFilter;



  private birthplaceClickedSource = new Subject<string>();
  birthplaceClicked$ = this.birthplaceClickedSource.asObservable();
  
  private boundsUpdatedSource = new Subject<LatLngBounds>();
  boundsUpdated$ = this.boundsUpdatedSource.asObservable();

  private zoomOutSource = new Subject<any>();
  zoomOut$ = this.zoomOutSource.asObservable();
  
  private filterChangedSource = new Subject<any>();
  filterChanged$ = this.filterChangedSource.asObservable();
  
  private filteredBirthplaces = new Subject<any>();
  filteredBirthplaces$ = this.filteredBirthplaces.asObservable();

  constructor(private db: AngularFirestore) {
    this.birthplaceCollection = this.db.collection('birthplaces');
  }


  getBirthplace(id: string): Observable<any> {
    var docRef = this.db.collection('birthplaces').doc(id);
    return docRef.valueChanges();
  }

  getBirthplaces(): Observable<any> {
   return  this.birthplaceCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        //console.log(data.type);
        return { id, ...data };
      });
    });
  }

  getFilteredBirthplaces(): Observable<any> {
    return this.filteredBirthplaces$;
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


  updateBounds(bounds: LatLngBounds) {
    this.displayedBounds = bounds ? bounds : this.displayedBounds;
    this.boundsUpdatedSource.next(this.displayedBounds);
  }

  updateFilter(filter: BirthplaceFilter) {
    this.filter = filter ? filter : this.filter;
    this.filterChangedSource.next(this.filter);
    this.filteredBirthplaces.next("asdf"
      //this.filter
      //get filtered Birthplaces
      //hier muss ein wert rein. 
     
    );
  }

  zoomToBirthplace(id) {
    this.birthplaceClickedSource.next(id);
  }

  zoomOut(){
    console.log("zoom out");
    this.zoomOutSource.next();
  }

  search(term: string): Observable<any[]> {
    return this.getBirthplaces().map(actions =>
      actions.filter(item =>
        item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
      )
    );
  }

  recalculateScore(birthplaceId: string) {
    //get all Experiences per Birthplaceid

    //calculate new Averages

    //update Birthplace-Record in Firebase
  }


}
