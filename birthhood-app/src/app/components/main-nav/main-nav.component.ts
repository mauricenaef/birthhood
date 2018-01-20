import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from '../../modules/login/services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  isLateralNavAnimating: boolean = false;
  userLoggedIn: boolean = false;
  constructor(private authService: AuthService, public router: Router) {
    this.authService.af.auth.onAuthStateChanged(user => this.userLoggedIn = user ? true : false)
  }

  ngOnInit() {
  }

  toggle(event, htmlType) {
    if (!this.isLateralNavAnimating) {
      if ($(this).parents('.csstransitions').length > 0) this.isLateralNavAnimating = true;

      $('body').toggleClass(htmlType + '-navigation-is-open');
      $(this).toggleClass('is-active');

      $('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        this.isLateralNavAnimating = false;
      });
    }
  }

}
