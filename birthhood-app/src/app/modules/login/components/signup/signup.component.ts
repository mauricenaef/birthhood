import { Component, OnInit, HostBinding } from '@angular/core';
import { EmailPasswordCredentials } from '../../models/email-password-credentials';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { fadeInAnimation } from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class SignupComponent implements OnInit {
  @HostBinding('style.display') display = 'block'; 
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
