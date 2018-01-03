import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard-sidebar',
  templateUrl: './user-dashboard-sidebar.component.html',
  styleUrls: ['./user-dashboard-sidebar.component.scss']
})
export class UserDashboardSidebarComponent implements OnInit {

  currentUser: firebase.User;

  constructor(private af: AngularFireAuth, private router: Router) { }


  ngOnInit() {
    this.af.auth.onAuthStateChanged(
      user => {
        this.currentUser = user;
      }
    )
  }


  logout() {
    this.af.auth.signOut();

    this.router.navigateByUrl('/');
  }
}
