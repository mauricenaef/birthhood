import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { EmailPasswordCredentials } from '../../models/email-password-credentials';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;

  constructor(private af: AngularFireAuth, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
          this.toastr.success( `Konto für ${formData.value.email} wurde erstellt`, 'Konto erstellt');
          this.router.navigate(['/user-dashboard'])
        }).catch(
        (err) => {
          this.toastr.success(err, 'Fehler');
        })
    }
  }
}
