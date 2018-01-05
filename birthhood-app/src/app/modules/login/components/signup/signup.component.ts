import { Component, OnInit } from '@angular/core';
import { EmailPasswordCredentials } from '../../models/email-password-credentials';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.authService.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(
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
