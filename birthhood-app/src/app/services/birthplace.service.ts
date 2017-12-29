import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { AgmCoreModule, MapsAPILoader, LatLngBounds, LatLng } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/filter';
import { MarkerAGM } from '../models/marker-agm';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BirthplaceFilter } from '../models/birthplace-filter';
import { LatLngBoundsLiteral } from '@agm/core/services/google-maps-types';


declare var google: any;

@Injectable()
export class BirthplaceService {

  birthplaceCollection;
  displayedBounds: LatLngBounds;

  birthplaceClickedSource = new Subject<string>();
  birthplaceClicked$ = this.birthplaceClickedSource.asObservable();

  
  private zoomOutSource = new Subject<any>();
  zoomOut$ = this.zoomOutSource.asObservable();


  filterChanged$: BehaviorSubject<any>;

  filter: BirthplaceFilter;
  birthplaces$; //firestore Observable
  displayedBirthplaces$; //


  constructor(private db: AngularFirestore, private mapsAPILoader: MapsAPILoader) {

    this.birthplaceCollection = this.db.collection('birthplaces');

    this.filter = <BirthplaceFilter>{
      spital: true,
      geburtshaus: true
    }

    this.filterChanged$ = new BehaviorSubject<any>({
      bounds: null,
      filter: this.filter
    })
   }

//  getDirectFromFirebase = (inputfilter) => {
    // leider gibt es GeoFire für FireStore nicht - die Funktionalität werde erst später
    //nachgebaut: https://stackoverflow.com/questions/46553682/is-there-a-way-to-use-geofire-with-firestore
    //Deshalb verzichten wir hier auf das räumliche Filtern der Daten direkt in Firestore und
    //machen es im .filter*/
  //  console.log(inputfilter);
    //console.log(inputfilter.bounds.south);
    /*return this.db.collection('birthplaces', ref => 
    ref.where('type', '!=', inputfilter.filter.spital?
    "": "spital")
    .where('type', '!=', inputfilter.filter.geburtshaus?
    "": "geburtshaus"))*/
   // return this.birthplaceCollection
      //.where("lat", ">=", inputfilter.bounds.lat)
      //.where("lat", "<=", inputfilter.bounds.lat)
     // .snapshotChanges().map(actions => {
        //return this.birthplaceCollection.snapshotChanges().map(actions => {
/*
        console.log("gtetall");
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
          .filter(x => {
            return inputfilter.filter[x.type]
          }
          ).filter(item => {
            let latLng = new MarkerAGM();
            latLng.constructor(item.lat, item.lng);
            return inputfilter.bounds ? inputfilter.bounds.contains(latLng) : true;
          });
      });
  } */

  getBirthplaces(): Observable<any> {
    return this.birthplaceCollection
      .snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  getBirthplacesFiltered = () => {
    return this.birthplaceCollection
      .snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
          .filter(x => {
            return this.filter[x.type]
          });
      });
  }

  getBirhplacesOnMap(): Observable<any> {
    return this.filterChanged$.switchMap(filter =>
      this.getBirthplacesFiltered().map(items => items.filter(item => {
        let latLng = new MarkerAGM();
        latLng.constructor(item.lat, item.lng);
        return this.displayedBounds.contains(latLng);
      }
      )));
  }

  getBirthplace(id: string): Observable<any> {
    var docRef = this.birthplaceCollection.doc(id);
    return docRef.valueChanges();
  }


  updateFilter(filter: BirthplaceFilter) {
    this.filter = filter ? filter : this.filter;
    this.filterChanged$.next({
      bounds: this.displayedBounds,
      filter: this.filter
    });
  }

  updateBounds(bounds: LatLngBounds) {
    this.displayedBounds = bounds ? bounds : this.displayedBounds;
    this.filterChanged$.next({
      bounds: this.displayedBounds,
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
    return this.getBirthplacesFiltered().map(actions =>
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
