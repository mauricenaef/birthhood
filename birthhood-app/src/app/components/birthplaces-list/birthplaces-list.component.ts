import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Subscription } from 'rxjs/Subscription';
import { Subscribable } from 'rxjs/Observable';
import 'rxjs/add/operator/merge';
import { LatLngBounds } from '@agm/core';

@Component({
  selector: 'app-birthplaces-list',
  templateUrl: './birthplaces-list.component.html',
  styleUrls: ['./birthplaces-list.component.scss']
})
export class BirthplacesListComponent implements OnInit, OnDestroy {

  @Input() bounds: LatLngBounds;
  birthplaces;
  subscription: Subscription;

  constructor(private birthplaceService: BirthplaceService) {

  }

  ngOnInit() {

    this.subscription = this.birthplaceService.boundsUpdated$.subscribe(
      bounds => {
        this.birthplaceService.getDisplayedBirthplaces(bounds).subscribe(
          displayedBirthplaces => {
            this.birthplaces = displayedBirthplaces;
          })
      }
    )
    this.birthplaceService.zoomOut();
    /* as the boundschanged Event is not emitted yet (as of 10.12.2017), we have to manually
    trigger the services boundsupdated-subject */
    this.birthplaceService.displayedBounds && this.birthplaceService.updateBounds(null);

    //Zoom out
  }

  ngOnDestroy() {
    /*gemäss Michael nicht mehr nötig in Angular5 oder so*/
    this.subscription.unsubscribe();
  }

}
