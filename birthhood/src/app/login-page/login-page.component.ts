import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public  authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.loginWithEmail().then((data) => {
      this.router.navigate(['']);
    });
  }

  logout() {
    this.authService.logout().then((data) => {
      this.router.navigate(['']);
    });
  }

}
