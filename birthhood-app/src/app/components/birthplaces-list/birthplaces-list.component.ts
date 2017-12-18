import { Component, OnInit, OnDestroy } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Subscription } from 'rxjs/Subscription';
import { Subscribable } from 'rxjs/Observable';
import 'rxjs/add/operator/merge';

@Component({
  selector: 'app-birthplaces-list',
  templateUrl: './birthplaces-list.component.html',
  styleUrls: ['./birthplaces-list.component.scss']
})
export class BirthplacesListComponent implements OnInit, OnDestroy {

  birthplaces;
  subscription: Subscription;

  constructor(private birthplaceService: BirthplaceService) {

  }

  ngOnInit() {
    
    this.subscription = this.birthplaceService.boundsUpdated$.subscribe(
      bounds => {
        this.birthplaceService.getDisplayedBirthplaces(bounds).subscribe(
          displayedBirthplaces => {
            //console.log(displayedBirthplaces);
            this.birthplaces = displayedBirthplaces;
          })
      }
    )

    
    this.birthplaceService.zoomOut();
  }

  ngOnDestroy() {
    /*gemäss Michael nicht mehr nötig in Angular5 oder so*/
    this.subscription.unsubscribe();
  }

}
