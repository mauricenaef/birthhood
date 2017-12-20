import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { LatLngBounds } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/filter';
import { MarkerAGM } from '../models/marker-agm';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BirthplaceFilter } from '../models/birthplace-filter';


@Injectable()
export class BirthplaceService {

  birthplaceCollection;
  displayedBounds: LatLngBounds;

  birthplaceClickedSource = new Subject<string>();
  birthplaceClicked$ = this.birthplaceClickedSource.asObservable();

  private boundsUpdatedSource = new Subject<LatLngBounds>();
  boundsUpdated$ = this.boundsUpdatedSource.asObservable(); //map updated Observable

  private zoomOutSource = new Subject<any>();
  zoomOut$ = this.zoomOutSource.asObservable();


  //private filterChangedSource = new Subject<any>();
  filterChanged$: BehaviorSubject<any>;//= this.filterChangedSource.asObservable();

  filter: BirthplaceFilter;
  birthplaces$; //firestore Observable
  displayedBirthplaces$; //

  constructor(private db: AngularFirestore) {
    this.birthplaceCollection = this.db.collection('birthplaces');

    //initialize Filters:
    this.filterChanged$ = new BehaviorSubject<any>(
      <BirthplaceFilter>{
        spital: true,
        geburtshaus: true
      }
    )
  }

  getAllBirthplaces(): Observable<any>{
    return this.birthplaceCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        //console.log(data.type);
        return { id, ...data };
      });
    });
  }

  getBirthplacesFiltered(): Observable<any> {
    return Observable.combineLatest(this.getAllBirthplaces(), 
      this.boundsUpdated$, this.filterChanged$ 
    ,(bp: Observable<any>, bounds, filter) => {
      return bp.filter(x => {
        return this.filter[x.type]}
      ).filter(item => {
          let latLng = new MarkerAGM();
          latLng.constructor(item.lat, item.lng);
          return bounds.contains(latLng);
        });
      })
  }

  getBirthplace(id: string): Observable<any> {
    var docRef = this.db.collection('birthplaces').doc(id);
    return docRef.valueChanges();
  }


  updateFilter(filter: BirthplaceFilter) {
    this.filter = filter ? filter : this.filter;
    //this.filterChangedSource.next(this.filter);
    this.filterChanged$.next(this.filter);
  }

  updateBounds(bounds: LatLngBounds) {
    console.log("bounds", bounds);
    this.displayedBounds = bounds ? bounds : this.displayedBounds;
    this.boundsUpdatedSource.next(this.displayedBounds);
  }

  zoomToBirthplace(id) {
    this.birthplaceClickedSource.next(id);
  }

  zoomOut(){
    this.zoomOutSource.next();
  }

  search(term: string): Observable<any[]> {
    return this.getAllBirthplaces().map(actions =>
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
