import { Injectable } from '@angular/core';

// import { AngularFireAuthModule } from 'angularfire2/auth';


import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {


  constructor(public af: AngularFireAuth) { }

  loginWithEmail() {
    return this.af.auth.signInWithEmailAndPassword(
      'tobbrun@gmail.com', '123456'
    );
  }

  logout() {
    return this.af.auth.signOut();
  }

}
