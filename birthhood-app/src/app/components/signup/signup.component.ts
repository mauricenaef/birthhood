import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { EmailPasswordCredentials } from '../../models/email-password-credentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  error: any;
  email:string;
  password: string;
  
  constructor(private af: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(formData.value.email,formData.value.password).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/user-dashboard'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }
}
