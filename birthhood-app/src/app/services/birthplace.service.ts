import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
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

  constructor(private db: AngularFirestore) {
    this.birthplaceCollection = this.db.collection('birthplaces');

    // initialer Load
    this.birthplaces$ = this.birthplaceCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        //console.log(data.type);
        return { id, ...data };
      });
    });
    this.filteredBirthplaces = new BehaviorSubject(this.birthplaceCollection.valueChanges());
    //this.birthplaces$ = this.birthplaceCollection.valueChanges();
   /* this.filteredBirthplaces$ = this.birthplaces$.flatMap( x => );
    .map( x => x.filter( y => {
      console.log("filter", y);
      
      return this.filter[y.type];})
    );*/
    this.filteredBirthplaces$ = 
    this.displayedBirthplaces$ = Observable.combineLatest(this.birthplaces$, this.boundsUpdated$, this.filterChanged$ // aka this.fullName = ko.computed(...)
    //.do(values => console.log('computed fired'))
    ,(bp: Observable<any>, bounds, filter) => {
      //console.log(bp);
      return bp.filter(x => {
       // console.log(x);
        return this.filter[x.type]}
      ).filter(item => {
          let latLng = new MarkerAGM();
          latLng.constructor(item.lat, item.lng);
          console.log(item);
          return bounds.contains(latLng);
        });
/*     return Array.prototype.slice.call(Object.entries(bp).filter(x => {
        console.log(this.filter[x[1].type]);
        return true;//this.filter[x[1].type];
      }).map(x => x[1]).reduce(function(acc, cur, i) {
        acc[i] = cur;
        return acc;
      }, {}));*/
      //return bp///.map(x => x);//.filter(x => true);
    })/*.do(each => console.log(each))/*.filter(x => true)/*.map(x => x).filter(y => {
      console.log(y);
      return true});
    //.map((bp, bounds, filter) => 
    /*  values[0]//.filter() //filteredBirthplaces

    ).filter(x => true);/*.filter(x => {
      console.log(x);
        return true;
      }

    );*/
    
    this.updateFilter(null);
   // this.boundsUpdated$

    //this.displayedBirthplaces$ = this.birthplaceCollection.valueChanges();
    //this.displayedBirthplaces$.subscribe(x => console.log("new", x));
    //this.displayedBirthplaces = new BehaviorSubject(this.filteredBirthplaces.asObservable());//this.birthplaceCollection.valueChanges());

    //console.log(this.filteredBirthplaces$);
    //this.displayedBirthplaces.subscribe(x => console.log("new", x));
  }


  getBirthplace(id: string): Observable<any> {
    var docRef = this.db.collection('birthplaces').doc(id);
    return docRef.valueChanges();
  }

  getBirthplaces(): Observable<any> {
    //wenn wir nur auf den Filter hören, dann könnten wir das Problem umgehen.

    return this.birthplaceCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        //console.log(data.type);
        //console.log(this.filter[data.type]);
        return { id, ...data };
      }).filter(x => {
        //console.log(this.filter[x.type]);
        return this.filter[x.type];
      });

    });
  }

  getFilteredBirthplaces(): Observable<any> {
    return this.filteredBirthplaces;
  }


  /*getDisplayedBirthplaces(bounds: LatLngBounds): Observable<any> {
   //console.log("ddisplay", bounds);
    //return this.getBirthplaces().map(actions => {
    // return this.filteredBirthplaces$.map(actions => {
 
   this.filteredBirthplaces$.subscribe(x => {return x.map(actions => {
       return actions.filter(item => {
         let latLng = new MarkerAGM();
         latLng.constructor(item.lat, item.lng);
         console.log(item.lat);
         return bounds.contains(latLng);
       })
     }
     )});
   }*/


  updateBounds(bounds: LatLngBounds) {
    console.log("updatebounds", bounds);
    this.displayedBounds = bounds ? bounds : this.displayedBounds;
    this.boundsUpdatedSource.next(this.displayedBounds);
   /* this.displayedBirthplaces.next(

      this.filteredBirthplaces.asObservable().filter(item => {
            let latLng = new MarkerAGM();
            latLng.constructor(item.lat, item.lng);
            console.log(item);
            return bounds.contains(latLng);
          }
        )
      /*.map(actions => {
        console.log
        return actions.filter(item => {
          let latLng = new MarkerAGM();
          latLng.constructor(item.lat, item.lng);
          //console.log(item.lat);
          return bounds.contains(latLng);
        })
      }
      ).share()*/
    //);
  }

  updateFilter(filter: BirthplaceFilter) {
    console.log("filter", filter);
    this.filter = filter ? filter : this.filter;
    this.filterChangedSource.next(this.filter);
    /*this.filteredBirthplaces.next(this.getBirthplaces()
      //this.filter
      //get filtered Birthplaces
      //hier muss ein wert rein. 

    );*/
  }

  zoomToBirthplace(id) {
    this.birthplaceClickedSource.next(id);
  }

  zoomOut() {
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
