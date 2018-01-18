import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {

  constructor(
    public af: AngularFireAuth, 
    private router: Router, 
    private toastr: ToastrService
  ) {

  }

  resetPassword(email: string) {
    let auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => this.toastr.success("Eine Email um Ihr Passwort zurückzusetzen wurde versandt!", "Email versandt"))
      .catch((error) => this.toastr.error(error, "Ein Fehler ist aufgetretten!"))
  }

  signOut() {
    this.af.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
    this.toastr.success(`${this.af.auth.currentUser.email} abgemeldet`, "Logout");
  }

}
