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

    /*this.birthplaceService.displayedBirthplaces$.subscribe(x => {console.log(x);
      this.birthplaces = x});
    */
    /*this.subscription = this.birthplaceService.displayedBirthplaces.subscribe(
      
          displayedBirthplaces => {
            
            displayedBirthplaces.subscribe(x => {
              console.log("new list", x);
              this.birthplaces = x});
            /*
            console.log("list", displayedBirthplaces);
            this.birthplaces = displayedBirthplaces;*/
        //  })
      
    

    
    //this.birthplaceService.zoomOut();
  }

  ngOnDestroy() {
    /*gemäss Michael nicht mehr nötig in Angular5 oder so*/
    //this.subscription.unsubscribe();
  }

}
