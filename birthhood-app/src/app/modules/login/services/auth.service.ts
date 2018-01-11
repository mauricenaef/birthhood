import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {

  user: Observable<User>;
  error: any;

  constructor(
    public af: AngularFireAuth,
    public afs: AngularFirestore,
    private router: Router,
    private toastr: ToastrService
  ) {


    this.user = this.af.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return Observable.of(null)
        }
      })
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.oAuthLogin(provider);
  }


  private oAuthLogin(provider) {
    return this.af.auth.signInWithPopup(provider)
    .then(
      (credential) => {
        //console.log(credential.user);
        this.updateUserData(credential.user);
    })
    .then(
      (success) => {
      this.router.navigate(['/user-dashboard']);
    })
    .catch(
      (err) => {
      this.error = err;
    })
      
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data)
  }

  signOut() {
    this.af.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
    this.toastr.success(`${this.af.auth.currentUser.displayName} abgemeldet`, "Logout");
  }

}
