import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private af: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.af.auth.signOut();
    this.router.navigateByUrl('/');
  }
}
