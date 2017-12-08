import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase'
import 'firebase/firestore'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  items;

  constructor(db: AngularFirestore) {
    //this.items=      db.collection('birthplaces').valueChanges();
    //console.log("sdf");
    //this.items.subscribe(x => console.log(x));

    var birthplaces = db.collection("birthplaces");
    
    // Create a query against the collection.
    //var query = birthplaces.where("state", "==", "CA");
    let item = db.collection('birthplaces', ref => ref.where('NAME', '==', 'Geburtshaus Delphys') ).valueChanges();
    item.subscribe(data => console.log(data) )
  }

}
