import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { BirthplaceService } from '../../birthplace/services/birthplace.service';
import { Observable } from 'rxjs/Observable';
import { Experience } from '../models/experience-form-data';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ExperienceService {

  constructor(
    private db: AngularFirestore,
    private birthplaceService: BirthplaceService,
    private toastr: ToastrService

  ) { }

  convertObject(data) {
    let obj = {}
    Object.keys(data).forEach(function (key, index) {
      obj[key] = data[key];
    });
    return obj;
  }

  save(experience: Experience): Promise<firebase.firestore.DocumentReference> {
    return this.db.collection("birthexperiences").add(this.convertObject(experience))
  }

  delete(experience: Experience) {
    this.db.doc(`birthexperiences/${experience.id}`).delete()
      .then(success => {
        this.toastr.success(`Ihr Geburtserlebnis mit dem Namen: ${experience.birth_name}`, "Geburtserlebnis gelöscht");
      })
      .catch(err => {
        this.toastr.error(err, "Ihr Geburtserlebnis konnte nicht gelöscht werden.");
      });
  }

  getExperiencesByUserId(userId: string): Observable<Experience[]> {
    return this.db.collection("birthexperiences", ref => ref.where("user_id", "==", userId))
      .snapshotChanges().map(snapshot => {
        return snapshot.map(item => {
          const data: Object = item.payload.doc.data();
          const id: string = item.payload.doc.id;
          return <Experience>{ id, ...data };
        })
      });
  }


}
