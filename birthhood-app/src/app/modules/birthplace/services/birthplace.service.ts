import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AgmCoreModule, MapsAPILoader, LatLngBounds, LatLng } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/filter';
import { MarkerAGM } from '../models/marker-agm';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BirthplaceFilter } from '../models/birthplace-filter';
import { LatLngBoundsLiteral } from '@agm/core/services/google-maps-types';
import { Birthplace } from '../models/birthplace';
import { BirthplaceBoundsStream } from '../models/birthplace-bounds-stream';

declare var google: any;

@Injectable()
export class BirthplaceService {

  birthplaceCollection: AngularFirestoreCollection<Birthplace>;
  displayedBounds: LatLngBounds;

  birthplaceClickedSource = new Subject<string>();
  birthplaceClicked$ = this.birthplaceClickedSource.asObservable();

  private zoomOutSource = new Subject<void>();
  zoomOut$ = this.zoomOutSource.asObservable();

  filterChanged$: BehaviorSubject<BirthplaceBoundsStream>;
  filter: BirthplaceFilter;

  private carouselUpdated = new Subject<string>();
  carouselUpdated$ = this.carouselUpdated.asObservable();

  constructor(private db: AngularFirestore, private mapsAPILoader: MapsAPILoader) {

    this.birthplaceCollection = this.db.collection('birthplaces');

    this.filter = <BirthplaceFilter>{
      spital: true,
      geburtshaus: true
    }

    this.filterChanged$ = new BehaviorSubject<BirthplaceBoundsStream>({
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

  /** unfortunately, firebase firestore does not provide any geo-functionality nor does
   * it allow range-filters with more than two paramters. We therefore have to fetch all
   * birthplaces from firestore and cannot filter this on the backend. Yet. As soon as the
   * entity "geopoint" will be supported by firebase firestore, this will be corrected.
   */
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

  getBirthplace(id: string): Observable<Birthplace> {
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

  carouselDragged(cardId: string): void {
    this.carouselUpdated.next(cardId);
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

  /** Firebase firestore does not allow any search functions as of yet. 
   * The only alternative would be to set up an elastic-search service with synced 
   * data from firestore, which would be out of scope for this project.
  */
  search(term: string): Observable<Birthplace[]> {
    return this.getBirthplacesFiltered().map(birthplaces =>
      birthplaces.filter(item =>
        item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
      )
    );
  }
}
