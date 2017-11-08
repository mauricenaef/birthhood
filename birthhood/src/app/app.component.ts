import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
// import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 /* private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;*/
  items: Observable<any[]>;

  constructor(db: AngularFirestore, public authService: AuthService, private router: Router) {
    this.items = db.collection('experiences').valueChanges();
    // this.login();
/*
    this.authService.af.auth.onAuthStateChanged(
        (auth) => {
          if (auth == null) {
            console.log('Logged out');
            this.isLoggedIn = false;
            this.user_displayName = '';
            this.user_email = '';
            // this.router.navigate(['login']);

          } else {
            this.isLoggedIn = true;
            this.user_displayName = auth.displayName;
            this.user_email = auth.email;
            console.log(auth.email);
            console.log('Logged in');
            console.log(auth);
            // this.router.navigate(['']);
          }
        }
      );*/
  }

 /* login() {
    this.authService.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  } */

}
