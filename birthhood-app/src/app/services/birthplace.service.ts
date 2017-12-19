import { Injectable , OnInit} from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { LatLngBounds } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/combineLatest';

import { MarkerAGM } from '../models/marker-agm';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BirthplaceFilter } from '../models/birthplace-filter';

@Injectable()
export class BirthplaceService {

  birthplaceCollection;
  displayedBounds: LatLngBounds;
  //displayedBirthplaces$:  Observable<any>;
  filter: BirthplaceFilter;

  private birthplaceClickedSource = new Subject<string>();
  birthplaceClicked$ = this.birthplaceClickedSource.asObservable();

  private boundsUpdatedSource = new Subject<LatLngBounds>();
  boundsUpdated$ = this.boundsUpdatedSource.asObservable();
  boundsUpdated : BehaviorSubject<any>;

  private zoomOutSource = new Subject<any>();
  zoomOut$ = this.zoomOutSource.asObservable();

  private filterChangedSource = new Subject<any>();
  filterChanged$ = this.filterChangedSource.asObservable();

  birthplaces$;
   filteredBirthplaces  : BehaviorSubject<any>;
  filteredBirthplaces$ ;// this.filteredBirthplaces.asObservable();

   displayedBirthplaces;// : BehaviorSubject<any>;
  displayedBirthplaces$;// = this.displayedBirthplaces.asObservable();

  changeFilter: BehaviorSubject<any>;

  constructor(private db: AngularFirestore) {
    //subscribe zu dem filterobject.

    this.birthplaceCollection = this.db.collection('birthplaces');

    this.changeFilter = new BehaviorSubject<any>({
      map: null,
      filter: <BirthplaceFilter>{spital: true, geburtshaus: true}
    });

    //this.changeFilter.switchMap(this.getBirthplaces).subscribe(x => console.log(x));

  }
  
  getBirthplacesV2(){
    return this.changeFilter.switchMap(this.getBirthplaces);
  }

  getBirthplaces(): Observable<any> {
    
    let birthplaceCollection = this.db.collection('birthplaces');
    return birthplaceCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })/*.filter(x => {
        return this.filter[x.type];
      })*/;

    });
  }

  getBirthplace(id: string): Observable<any> {
    var docRef = this.db.collection('birthplaces').doc(id);
    return docRef.valueChanges();
  }

  getFilteredBirthplaces(): Observable<any> {
    return this.filteredBirthplaces;
  }


  updateBounds(bounds: LatLngBounds) {
    console.log("bounds updated", bounds);
    this.displayedBounds = bounds ? bounds : this.displayedBounds;
    
   /* this.changeFilter.next({
      map: this.displayedBounds,
      filter: this.filter
    });*/

  }

  updateFilter(filter: BirthplaceFilter) {
    console.log("filter triggered", filter);
    this.filter = filter ? filter : this.filter;
    //this.filterChangedSource.next(this.filter);
    this.changeFilter.next({
      map: this.displayedBounds,
      filter: this.filter
    });

  }

  zoomToBirthplace(id) {
    this.birthplaceClickedSource.next(id);
  }

  zoomOut() {
    this.zoomOutSource.next();
  }

  search(term: string): Observable<any[]> {
    return this.getBirthplaces(
      
    ).map(actions =>
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
