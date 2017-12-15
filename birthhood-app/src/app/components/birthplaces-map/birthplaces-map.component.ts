import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { AgmCoreModule, LatLngLiteral, LatLngBoundsLiteral, LatLngBounds, LatLng } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { BirthplaceService } from '../../services/birthplace.service';
import { Router } from '@angular/router';
import { MarkerAGM } from '../../models/marker-agm';
import { AgmMap } from '@agm/core/directives/map';


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
  probably in ngOnInit()
  bounds.extend um alle anzuzeigen*/
  lat = 47.2632317;
  lng = 8.5893569;

  constructor(public birthplaceService: BirthplaceService, private router: Router) {
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
            .then(() => {
              /*this.map._mapsWrapper.panTo({ lat: birthplace.lat, lng: birthplace.lng }));
              panToBounds scheint nicht zu funktionieren. setCenter oder panTo oder fitBounds
              https://developers.google.com/maps/documentation/javascript/reference?
              Hack: https://codepen.io/j4k/pen/gPmdWN */

              this.map._mapsWrapper.fitBounds(this.generateBounds(
                { lat: birthplace.lat, lng: birthplace.lng },
                0.0005
              ))
            })
        });
      });
  }

  generateBounds(latLng: LatLngLiteral, buffer: number): LatLngBoundsLiteral {
    return {
      east: latLng.lng + buffer,
      north: latLng.lat + buffer,
      south: latLng.lat - buffer,
      west: latLng.lng - buffer
    }
  }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        //this.location = position.coords;
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        //console.log(position.coords); 
      });
   }
  }

  clickedMarker(id: string) {
    this.router.navigate(['/birthplaces/details', id]);
  }

}
