import { Component, OnInit, OnDestroy } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/merge';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-birthplaces-list',
  templateUrl: './birthplaces-list.component.html',
  styleUrls: ['./birthplaces-list.component.scss']
})
export class BirthplacesListComponent implements OnInit, OnDestroy {

  birthplaces: Observable<any[]>;
  subscription: Subscription;

  constructor(public birthplaceService: BirthplaceService, private route: ActivatedRoute) {

    this.subscription = this.route.params.subscribe(params => {
      console.log("route");
      this.birthplaceService.getBirthplacesFiltered().debounceTime(400).subscribe( 
        displayedBirthplaces => {
        console.log("list", displayedBirthplaces);
        this.birthplaces = displayedBirthplaces;
      });
    });

  }

  ngOnInit() {
    
    this.birthplaceService.zoomOut();
    
    //nötig, damit die Liste neu initialisiert wird.
    //this.birthplaceService.updateFilter(null);
  }

  ngOnDestroy() {
    /*gemäss Michael nicht mehr nötig in Angular5 oder so*/
    console.log("destroooooy");
    this.subscription.unsubscribe();
  }

}
