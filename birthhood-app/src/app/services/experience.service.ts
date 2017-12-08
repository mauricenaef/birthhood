import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { BirthplaceService } from './birthplace.service';


@Injectable()
export class ExperienceService {

  constructor(private db: AngularFirestore,  private birthplaceService: BirthplaceService) { 

  }

  setExperience(){
    //set Experience

    //update Score for Birthplace
    this.birthplaceService.recalculateScore("sdf")

  }

}
