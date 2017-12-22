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

  public slider_options = {
    items: 3, 
    dots: true, 
    navigation: false, 
    margin: 20, 
    center: true, 
    loop:true, 
    autoWidth:false
  }

  trackByFn(birthplace: any){
    return birthplace != null ? birthplace.id: null;
 }
 
  constructor(public birthplaceService: BirthplaceService, private route: ActivatedRoute) {

    this.subscription = this.route.params.subscribe(params => {
      this.birthplaceService.getBirhplacesOnMap().debounceTime(400).subscribe( 
        displayedBirthplaces => {
        this.birthplaces = displayedBirthplaces.slice(0,7);
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
    this.subscription.unsubscribe();
  }

}
