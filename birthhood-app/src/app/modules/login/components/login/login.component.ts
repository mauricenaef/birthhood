import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { EmailPasswordCredentials } from '../../models/email-password-credentials';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { fadeInAnimation } from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class LoginComponent implements OnInit {
  @HostBinding('style.display') display = 'block'; 
  email: string;
  password: string;
  //set Password to show default
  public show: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit() {
  }

  resetPassword(resetEmail: string) {
    if (!resetEmail) {
      this.toastr.error("Bitte geben Sie Ihre Email an!", "Keine Email angegeben")
    } else {
      this.authService.resetPassword(resetEmail)
    }
    
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
