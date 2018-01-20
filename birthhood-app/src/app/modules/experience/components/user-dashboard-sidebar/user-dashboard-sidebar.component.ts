import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../login/services/auth.service';

@Component({
  selector: 'app-user-dashboard-sidebar',
  templateUrl: './user-dashboard-sidebar.component.html',
  styleUrls: ['./user-dashboard-sidebar.component.scss']
})
export class UserDashboardSidebarComponent implements OnInit {

  currentUser: firebase.User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.af.auth.onAuthStateChanged(
      user => {
        this.currentUser = user;
      }
    )
  }


  logout() {
    this.authService.signOut();
  }
}
