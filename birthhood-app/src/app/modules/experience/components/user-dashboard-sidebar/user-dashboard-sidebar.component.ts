import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard-sidebar',
  templateUrl: './user-dashboard-sidebar.component.html',
  styleUrls: ['./user-dashboard-sidebar.component.scss']
})
export class UserDashboardSidebarComponent implements OnInit {

  currentUser;

  constructor( private af: AngularFireAuth , private router: Router) { }


  ngOnInit() {
    this.af.auth.onAuthStateChanged(
       x => {
         this.currentUser = x ;
         console.log(x);
       }
        )
  }


  logout(){
    this.af.auth.signOut();

    this.router.navigateByUrl('/');
  }
}
