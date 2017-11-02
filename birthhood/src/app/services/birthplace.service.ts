import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class BirthplaceService {
  birthplaces: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.birthplaces = db.collection('birthplaces').valueChanges();
  }
/*
  updateBirthplace(key, updatedBirthplace) {
    this.birthplaces.update(key, updatedBirthplace);
  }

  createBirthplace(birthplace) {
    this.birthplaces.push(birthplace);
  }
*/
}

