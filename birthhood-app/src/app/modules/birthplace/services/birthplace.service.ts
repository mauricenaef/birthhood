import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
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
import { Birthplace } from '../models/birthplace';

declare var google: any;

@Injectable()
export class BirthplaceService {

  birthplaceCollection: AngularFirestoreCollection<Birthplace>;
  displayedBounds: LatLngBounds;

  birthplaceClickedSource = new Subject<string>();
  birthplaceClicked$ = this.birthplaceClickedSource.asObservable();

  private zoomOutSource = new Subject<any>();
  zoomOut$ = this.zoomOutSource.asObservable();

  filterChanged$: BehaviorSubject<any>;
  filter: BirthplaceFilter;

  

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

  getBirthplaces(): Observable<Birthplace[]> {
    return this.birthplaceCollection
      .snapshotChanges().map(actions => {
        return actions.map(a => {
          const data: Object = a.payload.doc.data();
          const id: string = a.payload.doc.id;
          return <Birthplace>{ id, ...data };
        });
      });
  }

  getBirthplacesFiltered = () => {
    return this.birthplaceCollection
      .snapshotChanges().map(snapshot => {
        return snapshot.map(item => {
          const data: Object = item.payload.doc.data();
          const id: string = item.payload.doc.id;
          return <Birthplace>{ id, ...data };
        })
          .filter(x => {
            return this.filter[x.type]
          });
      });
  }

  getBirhplacesOnMap(): Observable<Birthplace[]> {
    return this.filterChanged$.switchMap(filter =>
      this.getBirthplacesFiltered().map(items => items.filter(item => {
        let latLng: MarkerAGM = new MarkerAGM();
        latLng.constructor(item.lat, item.lng);
        return this.displayedBounds ? this.displayedBounds.contains(latLng) : false;
      })
      )
    );
  }

  getBirthplace(id: string): Observable<any> {
    var docRef: AngularFirestoreDocument<Birthplace> = this.birthplaceCollection.doc(id);
    return <Observable<Birthplace>>docRef.valueChanges();
  }


  updateFilter(filter: BirthplaceFilter): void {
    this.filter = filter ? filter : this.filter;
    this.filterChanged$.next({
      bounds: this.displayedBounds,
      filter: this.filter
    });
  }

  updateBounds(bounds: LatLngBounds): void {
    this.displayedBounds = bounds ? bounds : this.displayedBounds;
    this.filterChanged$.next({
      bounds: this.displayedBounds,
      filter: this.filter
    });
  }

  zoomToBirthplace(id): void {
    this.birthplaceClickedSource.next(id);
  }

  zoomOut(): void {
    this.zoomOutSource.next();
  }

  search(term: string): Observable<Birthplace[]> {
    return this.getBirthplacesFiltered().map(birthplaces =>
      birthplaces.filter(item =>
        item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
      )
    );
  }
}
