import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isLateralNavAnimating = false;
  userLoggedIn: boolean = false;

  constructor(private af: AngularFireAuth, private router: Router) { 
    this.af.auth.onAuthStateChanged(user => this.userLoggedIn = user ? true: false)

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

  logout(){
    this.af.auth.signOut();

    this.router.navigateByUrl('/');
  }
}
