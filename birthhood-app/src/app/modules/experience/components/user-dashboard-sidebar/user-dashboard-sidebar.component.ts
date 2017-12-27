import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-user-dashboard-sidebar',
  templateUrl: './user-dashboard-sidebar.component.html',
  styleUrls: ['./user-dashboard-sidebar.component.scss']
})
export class UserDashboardSidebarComponent implements OnInit {

  currentUser;

  constructor( private authService: AuthService ) { }


  ngOnInit() {
     this.currentUser = this.authService.currentUserObservable;
     console.log(this.authService.currentUserObservable);
  }

}
