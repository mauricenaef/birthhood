import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { AuthService } from '../../modules/login/services/auth.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isLateralNavAnimating: boolean = false;
  userLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { 
    this.authService.af.auth.onAuthStateChanged(user => this.userLoggedIn = user ? true: false)

  }

  ngOnInit() {
  }

  toggle(): void {
    if (!this.isLateralNavAnimating) {
      if ($(this).parents('.csstransitions').length > 0) this.isLateralNavAnimating = true;

      $('body').toggleClass('footer-navigation-is-open');
      $(this).toggleClass('is-active');

      $('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        this.isLateralNavAnimating = false;
      });
    }
  }

  goto(path: string) : void {
    $('body').removeClass('footer-navigation-is-open');
    this.router.navigateByUrl(path);
  }

  logout(): void{
    this.authService.signOut();
  }
}
