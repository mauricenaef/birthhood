import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  userLoggedIn: boolean = false;

  constructor(private af: AngularFireAuth, private router: Router) { 
    this.af.auth.onAuthStateChanged(user => this.userLoggedIn = user ? true: false)

  }

  ngOnInit() {
  }

  logout(){
    this.af.auth.signOut();

    this.router.navigateByUrl('/');
  }
}
