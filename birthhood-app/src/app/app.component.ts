import { Component, AfterViewInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase'
import 'firebase/firestore'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  constructor(public router: Router){}

  ngAfterViewInit () {
    let body = document.getElementsByTagName('body')[0];
    setTimeout( _=> body.classList.remove("is-loading"));
  }

}
