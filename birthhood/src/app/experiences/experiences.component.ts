import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  items: Observable<any[]>;
  public filePath : string;

  constructor(db: AngularFirestore) {
    this.items = db.collection('experiences').valueChanges();
    var storage = firebase.storage();
    var storageRef = storage.ref();
    storageRef.child('IMG_1317.JPG').getDownloadURL().then(url =>
      this.filePath = url);

  }
  ngOnInit() {

  }

}
