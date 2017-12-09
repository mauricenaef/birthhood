import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { EmailPasswordCredentials } from '../../models/email-password-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: any;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.authService.loginWithEmail(new EmailPasswordCredentials(formData.value.email,
        formData.value.password)).then( x => 
          console.log("eingeloggt")
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
