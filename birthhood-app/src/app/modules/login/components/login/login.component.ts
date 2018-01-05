import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { EmailPasswordCredentials } from '../../models/email-password-credentials';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  email: string;
  password: string;

  constructor(private af: AngularFireAuth, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(formData): void{
    if (formData.valid) {
      this.af.auth.signInWithEmailAndPassword(formData.value.email,
        formData.value.password).then(x => {
          this.router.navigate(['/user-dashboard']);
          this.toastr.success(`Mit ${formData.value.email} eingeloggt`, "Login");
        }
        ).catch(err => {
          this.toastr.error(err, "Fehler bei Login");
        })
        ;
    }
  }
}
