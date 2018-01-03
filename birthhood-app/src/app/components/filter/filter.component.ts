import { Component, OnInit, Input} from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Observable } from 'rxjs/Observable';
import { BirthplaceFilter } from '../../models/birthplace-filter';
import * as $ from 'jquery';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  inputs: ['show-filter']
})
export class FilterComponent implements OnInit {
  
  
  @Input('show-filter')

  filter: BirthplaceFilter;
  isLateralNavAnimating = false;


  constructor(private birthplaceService: BirthplaceService) {
    this.filter = new BirthplaceFilter();
    this.filter.spital = true;
    this.filter.geburtshaus = false;

  }

  ngOnInit() {
    this.updateFilter();
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

  updateFilter() {
    //console.log("updateFilterin Component");
    //noch nötig?
    this.birthplaceService.updateFilter(this.filter);
  }
}

