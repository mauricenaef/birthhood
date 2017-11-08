import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
// import { AngularFireAuthModule } from 'angularfire2/auth';


@Injectable()
export class AuthService {

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  authState: any = null;
  userRef: AngularFireObject<any>;
  constructor(public af: AngularFireAuth) {
    this.af.authState.subscribe((auth) => {
      this.authState = auth
    });


    this.af.auth.onAuthStateChanged(
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
    );
  }

  loginWithEmail() {
    return this.af.auth.signInWithEmailAndPassword(
      'tobbrun@gmail.com', '123456'
    );
  }

  emailSignUp(credentials: EmailPasswordCredentials): Promise<any> {
    return this.af.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => console.log("success"))
      .catch(error => console.log(error));
  }

  logout() {
    return this.af.auth.signOut();
  }

}

export class EmailPasswordCredentials {
  email: string;
  password: string;
}
