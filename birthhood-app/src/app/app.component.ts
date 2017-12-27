import { Component, AfterViewInit } from '@angular/core';
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
  showSpiner: boolean = true;


  constructor(){
    //this.items =      db.collection('birthplaces').valueChanges();
    //console.log("sdf");
    //this.items.subscribe(x => console.log(x));

   
    // Create a query against the collection.
    //var query = birthplaces.where("state", "==", "CA");
    //let item = db.collection('birthplaces', ref => ref.where('NAME', '==', 'Geburtshaus Delphys') ).valueChanges();
    //item.subscribe(data => console.log(data));
    
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("loaded"); 

    this.showSpiner = false;

  }

  ngAfterViewInit () {

  }

}
