import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import { EmailPasswordCredentials } from '../models/email-password-credentials';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  //authState: any = null;
  userRef: AngularFireObject<any>;

constructor(public af: AngularFireAuth) {
   /* this.af.authState.subscribe((auth) => {
      this.authState = auth
    });*/


    this.af.auth.onAuthStateChanged(
      (auth) => {
        //this.authState = auth;
        if (auth == null) {
          console.log('Logged out');

        } else {
          console.log(auth.email);
          console.log('Logged in');
          console.log(auth.uid);
          console.log(auth);
        }
      }
    );
  }


  // Returns true if user is logged in
  /*get authenticated(): boolean {
    return this.authState !== null;
  }*/

  // Returns current user data
  /*get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }*/

  // Returns
  get currentUserObservable(): Observable<any> {
    return this.af.authState
  }

  // Returns current user UID
  /*get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }*/

  // Anonymous User
 /* get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false
  }*/

  // Returns current user display name or Guest
  /*get currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest'
    } /*else if (this.currentUserAnonymous) {
      return 'Anonymous'
    } else {
      return this.authState['displayName'] || 'User without a Name'
    }
  }*/

  loginWithEmail(credentials: EmailPasswordCredentials) {
    console.log(credentials);
    return this.af.auth.signInWithEmailAndPassword(
      credentials.email, credentials.password
    );
  }

  emailSignUp(credentials: EmailPasswordCredentials): Promise<any> {
    return this.af.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
      /*.then(() => console.log("success"))
      .catch((error) => {
      console.log(error);
    });*/
  }

  logout() {
    return this.af.auth.signOut();
  }


}
