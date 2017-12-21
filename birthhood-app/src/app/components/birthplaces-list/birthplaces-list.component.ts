import { Component, OnInit, OnDestroy } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/take';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-birthplaces-list',
  templateUrl: './birthplaces-list.component.html',
  styleUrls: ['./birthplaces-list.component.scss']
})
export class BirthplacesListComponent implements OnInit {

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
  constructor(public birthplaceService: BirthplaceService, private route: ActivatedRoute) {

      this.birthplaces = this.birthplaceService.getBirhplacesOnMap().take(5);
  }

  ngOnInit() {
    
    this.birthplaceService.zoomOut();
  }

  //um punkte weniger flickern zu lassen
  trackFbObjects = (idx, obj) => obj.$key;

  

}
