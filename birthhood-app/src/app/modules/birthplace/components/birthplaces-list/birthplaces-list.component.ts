import { Component, OnInit, ViewChild , ElementRef, OnDestroy } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/take';
import { ActivatedRoute } from '@angular/router';
import { Birthplace } from '../../models/birthplace';
import * as $ from 'jquery';

@Component({
  selector: 'app-birthplaces-list',
  templateUrl: './birthplaces-list.component.html',
  styleUrls: ['./birthplaces-list.component.scss']
})
export class BirthplacesListComponent implements  OnInit {

  sliderDragged = () => {
    let dragged_id = this.elRef.nativeElement.querySelector('.owl-item.active.center .item').getAttribute('data-id');
    this.birthplaceService.carouselDragged(dragged_id);
  }

  owl;
  birthplaces: Birthplace[];
  subscription: Subscription;

  @ViewChild('slider') private owlSlider: any;
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
    private elRef:ElementRef
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

/*   ngAfterViewInit(){
    this.owl = $('.owl-carousel');
    this.owl.on('changed.owl.carousel', function(event) {
      console.log("changed");
      this.onDragged();
    })
  } */




  //um punkte weniger flickern zu lassen
  trackFbObjects = (idx, obj) => obj.$key;

}
