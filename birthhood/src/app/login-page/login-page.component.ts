import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {AuthService, EmailPasswordCredentials} from '../services/auth.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userForm: FormGroup;

  newUser: boolean = true; // to toggle login or signup form
  passReset: boolean = false;

  constructor(private fb: FormBuilder, public  authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  login(credentials: EmailPasswordCredentials) {
    this.authService.loginWithEmail(credentials).then((data) => {
      this.router.navigate(['']);
    });
  }

  signup() {
    this.authService.emailSignUp(this.userForm.value).then(
      (data) => {
        this.login(this.userForm.value);
        this.router.navigate(['']);
      }
    );

  }

  logout() {
    this.authService.logout().then((data) => {
      this.router.navigate(['']);
    });
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
      ],
    });
    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'email': '',
    'password': ''
  };
  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email must be a valid email'
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'Password must be include at one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
    }
  };


}
