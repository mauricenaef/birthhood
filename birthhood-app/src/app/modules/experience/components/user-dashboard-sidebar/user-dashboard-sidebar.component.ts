import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-user-dashboard-sidebar',
  templateUrl: './user-dashboard-sidebar.component.html',
  styleUrls: ['./user-dashboard-sidebar.component.scss']
})
export class UserDashboardSidebarComponent implements OnInit {

  currentUser;

  constructor( private af: AngularFireAuth ) { }


  ngOnInit() {
    this.af.auth.onAuthStateChanged(
       x => this.currentUser = x );
  }

}
