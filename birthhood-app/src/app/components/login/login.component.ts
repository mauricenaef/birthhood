import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { EmailPasswordCredentials } from '../../models/email-password-credentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: any;
  email: string;
  password: string;

  constructor(private af: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }


  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.signInWithEmailAndPassword(formData.value.email,
        formData.value.password).then(x => {
          console.log("eingeloggt");
          this.router.navigate(['/user-dashboard']);

        }
        );
      /*this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })*/
    }
  }
}
