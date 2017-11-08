import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BirthplaceService } from '../services/birthplace.service';
import {AgmCoreModule, LatLngLiteral, LatLngBounds, LatLng} from '@agm/core';

@Component({
  selector: 'app-birthplaces',
  providers: [BirthplaceService],
  templateUrl: './birthplaces.component.html',
  styleUrls: ['./birthplaces.component.css']
})
export class BirthplacesComponent implements OnInit {

  items: Observable<any[]>;
  title= 'My first AGM project';
  lat  = 51.678418;
  lng = 7.809007;

  markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ]
  constructor(private service: BirthplaceService) {
    this.items = service.birthplaces;
  }

  // https://angular-maps.com/api-docs/agm-core/directives/AgmMarker.html#iconUrl
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: any) {
    /*this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });*/
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  updateCards($event: LatLngBounds){
    // console.log($event.getCenter());

    for (let marker of this.markers) {
      // let thislatlong = new LatLngLiteral(marker.lat, marker.lng )
      // let latlng = <LatLngLiteral>{lat: marker.lat, lng: marker.lng};
      let latLng = new MarkerAGM()
      latLng.constructor(marker.lat, marker.lng);
      if ($event.contains(latLng)){
          console.log(latLng);
      }
     /* if (marker.lat < $event.getNorthEast().lat() &&
        marker.lng < $event.getNorthEast().lng() &&
        marker.lat > $event.getSouthWest().lat() &&
      marker.lng > $event.getSouthWest().lng()) {
          console.log("inside", marker);
      }*/

    }


  }
  ngOnInit() {
  }
}
// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

class MarkerAGM implements LatLng{
/* Bug in AGM - das Interface erwartet Functions als Return values, GoogleMaps jedoch Floats.
Deshalb als Type "any".
 */
  public lat: any;
  public lng: any;

  label?: string;
  draggable: boolean;

  "constructor"(lat: number, lng: number) {

    this.lat = lat;
    this.lng = lng;
  }

}




