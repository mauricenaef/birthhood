import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { AgmCoreModule, LatLngLiteral, LatLngBoundsLiteral, LatLng } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { BirthplaceService } from '../../services/birthplace.service';
import { Router } from '@angular/router';
import { AgmMap } from '@agm/core/directives/map';
declare var google: any;

@Component({
  selector: 'app-birthplaces-map',
  templateUrl: './birthplaces-map.component.html',
  styleUrls: ['./birthplaces-map.component.scss'],
  outputs: ['selectedBirthplace']
})
export class BirthplacesMapComponent implements OnInit {


  @ViewChild(AgmMap) private map: any;
  items$: Observable<any[]>;

  /*
  fallback-location. HSR?*/
  lat = 47.2;
  lng = 8.6;
  // radius of earth in km
  R = 6371;
  zoomOutNumber = 3;

  constructor(public birthplaceService: BirthplaceService, private router: Router) {
   //birthplaceService.filteredBirthplaces$.subscribe(x => console.log("filtered", x));
   //birthplaceService.getBirthplaces().subscribe(x => {
   /*   birthplaceService.filteredBirthplaces.subscribe(x => {
       x.subscribe( y => { // console.log("infiltered", x);
       this.items$ = y;
      })});
      */

    /*  birthplaceService.birthplaces$.subscribe(x => {
       
        this.items$ = x;
       });
       */
    // Da der Filter noch nie getriggert wurde.
   // birthplaceService.updateFilter(null);
    //zoom to clicked Birthplace
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

    //birthplaceService.zoomOut$.subscribe(x => this.zoomOut());
  }



  ngOnInit() {
    this.birthplaceService.changeFilter.switchMap(
      this.birthplaceService.getBirthplaces).subscribe(
      x => console.log(x)
    )
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoomOut();
      });
    }
  }

  generateBounds(latLng: LatLngLiteral, buffer: number): LatLngBoundsLiteral {
    return {
      east: latLng.lng + buffer,
      north: latLng.lat + buffer,
      south: latLng.lat - buffer,
      west: latLng.lng - buffer
    }
  }

  updateCenter(latLng: LatLngLiteral) {
    this.lat = latLng.lat;
    this.lng = latLng.lng;
  }

  clickedMarker(id: string) {
    this.router.navigate(['/birthplaces/details', id]);
  }

  rad(x) {
    return x * Math.PI / 180;
  }

  calculateDistance(item): number {
    let mlat = item.lat;
    let mlng = item.lng;
    let dLat = this.rad(mlat - this.lat);
    let dLong = this.rad(mlng - this.lng);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(this.lat)) * Math.cos(this.rad(this.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return this.R * c;

  }
  zoomOut() {
    let itemsWithDistances = [];
   /* this.birthplaceService.getBirthplaces().subscribe(
      x => {
        x.map(item => {
          item.distance = this.calculateDistance(item);
          itemsWithDistances.push(item);
        }
        );

        itemsWithDistances.sort((x, y) => x.distance - y.distance);
        let nearestBirthplaces = itemsWithDistances.slice(0, this.zoomOutNumber);
        let bounds = new google.maps.LatLngBounds();
        nearestBirthplaces.forEach(
          thisBirthplace =>
            bounds.extend(<LatLng>{ lat: thisBirthplace.lat, lng: thisBirthplace.lng })
        );
        this.map._mapsWrapper.fitBounds(bounds);
        this.map._mapsWrapper.setCenter({ lat: this.lat, lng: this.lng });
      }
    );*/
  }
}
