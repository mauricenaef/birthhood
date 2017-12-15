import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { AgmCoreModule, LatLngLiteral, LatLngBounds, LatLng } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { BirthplaceService } from '../../services/birthplace.service';
import { Router } from '@angular/router';
import { MarkerAGM } from '../../models/marker-agm';
import { AgmMap } from '@agm/core/directives/map';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { LatLngBoundsLiteral, GoogleMap } from '@agm/core/services/google-maps-types';


@Component({
  selector: 'app-birthplaces-map',
  templateUrl: './birthplaces-map.component.html',
  styleUrls: ['./birthplaces-map.component.scss'],
  outputs: ['selectedBirthplace']
})
export class BirthplacesMapComponent implements OnInit {

  @ViewChild(AgmMap) private map: any;
  items$: Observable<any[]>;

  /*these will be set by the geolocation of the Browser. 
  probably in ngOnInit()*/
  lat = 47.2632317;
  lng = 8.5893569;

  constructor(public birthplaceService: BirthplaceService, private router: Router, private mapsApiWrapper: GoogleMapsAPIWrapper) {
    birthplaceService.getBirthplaces().subscribe(
      x => {
        this.items$ = x;
      }

    );

    birthplaceService.birthplaceClicked$.subscribe(
      id => {
        this.birthplaceService.getBirthplace(id).subscribe(x => {
          let birthplace = x;
          this.map.triggerResize()
            .then(() => this.map._mapsWrapper.panTo({ lat: birthplace.lat, lng: birthplace.lng }));
        });
      });

  }


  ngOnInit() {
  }

  clickedMarker(id: string) {
    this.router.navigate(['/birthplaces/details', id]);
  }

}
