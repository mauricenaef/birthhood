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

<<<<<<< HEAD

  public slider_options = {
    items: 3, 
    dots: true, 
    navigation: false, 
    margin: 20, 
    center: true, 
    loop:true, 
    autoWidth:false
  }

  constructor(private birthplaceService: BirthplaceService) {
=======
  constructor(public birthplaceService: BirthplaceService, private route: ActivatedRoute) {

    this.subscription = this.route.params.subscribe(params => {
      console.log("route");
      this.birthplaceService.getBirthplacesFiltered().debounceTime(400).subscribe( 
        displayedBirthplaces => {
        console.log("list", displayedBirthplaces);
        this.birthplaces = displayedBirthplaces;
      });
    });
>>>>>>> f03d18afb5b8695679386ebee3a41505cc30a8c4

  }

  ngOnInit() {
    
    this.birthplaceService.zoomOut();
<<<<<<< HEAD


=======
    
    //nötig, damit die Liste neu initialisiert wird.
    //this.birthplaceService.updateFilter(null);
>>>>>>> f03d18afb5b8695679386ebee3a41505cc30a8c4
  }

  ngOnDestroy() {
    /*gemäss Michael nicht mehr nötig in Angular5 oder so*/
    console.log("destroooooy");
    this.subscription.unsubscribe();
  }

}
