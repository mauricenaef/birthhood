import { Component, OnInit, ViewChild, ElementRef, OnDestroy , HostBinding} from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/take';
import { ActivatedRoute } from '@angular/router';
import { Birthplace } from '../../models/birthplace';
import * as $ from 'jquery';
import { fadeInAnimation } from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-birthplaces-list',
  templateUrl: './birthplaces-list.component.html',
  styleUrls: ['./birthplaces-list.component.scss'],
    // make fade in animation available to this component
    animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})
export class BirthplacesListComponent implements OnInit {
  @HostBinding('style.display') display = 'block';
  sliderDragged = () => {
    let item = this.elRef.nativeElement.querySelector('.owl-item.active.center .item')
    if (item) {
      let dragged_id = item.getAttribute('data-id');
      this.birthplaceService.carouselDragged(dragged_id);
    }
  }

  birthplaces: Birthplace[];
  subscription: Subscription;

  @ViewChild('slider') private owlSlider: any;

  // not moved to config due tue Callbackfunctions
  public slider_options = {
    items: 3,
    dots: true,
    navigation: false,
    margin: 20,
    autoWidth: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 40,
        center: true,
        startPosition: 1
      },
      700: {
        items: 2,
        stagePadding: 20
      },
      1024: {
        items: 3,
        center: true,
        loop: true,
        stagePadding: 30,
        startPosition: 0
      },
      1200: {
        items: 4,
        center: true,
        loop: true,
        stagePadding: 30,
        startPosition: 0
      }
    },
    onDragged: this.sliderDragged,
    onInitialized: this.sliderDragged
  }

  constructor(
    public birthplaceService: BirthplaceService,
    private route: ActivatedRoute,
    private elRef: ElementRef
  ) {
    this.birthplaceService.getBirhplacesOnMap()
      .subscribe(birthplaces => {
        let tempBirthplaces = birthplaces.splice(0, 9);
        let returnBirthplaces: Birthplace[] = [];
        for (let birthplace of tempBirthplaces) {
          returnBirthplaces.push(new Birthplace(birthplace));
        }
        this.birthplaces = returnBirthplaces;
      });
  }

  ngOnInit() {
    this.birthplaceService.zoomOut();
  }

  // um punkte weniger flickern zu lassen
  trackFbObjects = (idx, obj) => obj.$key;

}
