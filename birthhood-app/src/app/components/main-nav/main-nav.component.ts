import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  isLateralNavAnimating = false;
  userLoggedIn: boolean = false;
  constructor(private af: AngularFireAuth, private router: Router) {
    this.af.auth.onAuthStateChanged(user => this.userLoggedIn = user ? true : false)

  }

  ngOnInit() {
  }

  toggle(event, htmlType) {
    console.log(event, htmlType);
    //event.preventDefault();
    //stop if nav animation is running 
    if (!this.isLateralNavAnimating) {
      if ($(this).parents('.csstransitions').length > 0) this.isLateralNavAnimating = true;

      $('body').toggleClass(htmlType + '-navigation-is-open');
      $(this).toggleClass('is-active');

      $('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        //animation is over
        this.isLateralNavAnimating = false;
      });
    }
  }

}
