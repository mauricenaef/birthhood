import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import { EmailPasswordCredentials } from '../../models/email-password-credentials';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  error: any;
  email:string;
  password: string;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.authService.emailSignUp(new EmailPasswordCredentials(formData.value.email,formData.value.password)).then(
        (success) => {
        console.log(success);
        //this.router.navigate(['/login'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }
}
