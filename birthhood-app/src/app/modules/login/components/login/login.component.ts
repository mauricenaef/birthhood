import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailPasswordCredentials } from '../../models/email-password-credentials';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  //set Password to show default
  public show: boolean = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit() {
  }

  toggleShow() {
    this.show = !this.show;
    if (this.show) {
      this.show = true;
    } else {
      this.show = false;
    }
  }


  onSubmit(formData): void {
    if (formData.valid) {
      this.authService.af.auth.signInWithEmailAndPassword(formData.value.email,
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
