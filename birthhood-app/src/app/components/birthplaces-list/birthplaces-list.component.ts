import { Component, OnInit, OnDestroy } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/take';
import { ActivatedRoute } from '@angular/router';
import { Birthplace } from '../../models/birthplace';

@Component({
  selector: 'app-birthplaces-list',
  templateUrl: './birthplaces-list.component.html',
  styleUrls: ['./birthplaces-list.component.scss']
})
export class BirthplacesListComponent implements OnInit {

  birthplaces: Birthplace[];
  subscription: Subscription;

  public slider_options = {
    items: 3,
    dots: true,
    navigation: false,
    margin: 20,
    autoWidth: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 20
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
        center: true,
        loop: true,
        startPosition: 1
      }
    }
  }

  constructor(public birthplaceService: BirthplaceService, private route: ActivatedRoute) {
    this.birthplaceService.getBirhplacesOnMap()
      .subscribe(birthplaces => this.birthplaces = birthplaces.splice(0, 7) );
  }

  ngOnInit() {
    this.birthplaceService.zoomOut();
  }

  //um punkte weniger flickern zu lassen
  trackFbObjects = (idx, obj) => obj.$key;

}
