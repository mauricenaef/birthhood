import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { Router } from '@angular/router';
import { ToastrService, ActiveToast } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { EmailPasswordCredentials } from '../models/email-password-credentials';


interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {

  error: any;

  constructor(
    public af: AngularFireAuth,
    public afs: AngularFirestore,
    private router: Router,
    private toastr: ToastrService
  ) { }

  googleLogin(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider): Promise<void> {
    return this.af.auth.signInWithPopup(provider)
      .then(
      (credential) => {
        this.updateUserData(credential.user);
      })
      .then(
      (success) => {
        this.router.navigate(['/user-dashboard']);
        this.toastr.success('Erfolgreich eingeloggt', "Login");
      })
      .catch(
      (err) => {
        this.toastr.error(err, "Ein Fehler ist aufgetretten!")
      })

  }

  private updateUserData(user): Promise<void> {
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

  resetPassword(email: string): Promise<ActiveToast> {
    let auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => this.toastr.success("Eine Email um Ihr Passwort zurückzusetzen wurde versandt!", "Email versandt"))
      .catch((error) => this.toastr.error(error, "Ein Fehler ist aufgetretten!"))
  }

  signInWithEmailAndPassword(credentials: EmailPasswordCredentials): Promise<ActiveToast>{
    return this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(
      x => this.toastr.success(`Mit ${credentials.email} eingeloggt`, "Login")
    ).catch(err => this.toastr.error(err, "Fehler bei Login"))
  }

  signOut(): void {
    this.af.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
    this.toastr.success(`${this.af.auth.currentUser.email} abgemeldet`, "Logout");
  }

}
