import { Component, OnInit , EventEmitter} from '@angular/core';
import { AgmCoreModule, LatLngLiteral, LatLngBounds, LatLng } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { BirthplaceService } from '../../services/birthplace.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birthplaces-map',
  templateUrl: './birthplaces-map.component.html',
  styleUrls: ['./birthplaces-map.component.scss'],
  outputs: ['selectedBirthplace']
})
export class BirthplacesMapComponent implements OnInit {

  items: Observable<any[]>;
  public selectedBirthplace: EventEmitter<any> = new EventEmitter();
  lat = 47.2632317;
  lng = 8.5893569;

  constructor(private birthplaceService: BirthplaceService, private router: Router) {
    birthplaceService.getBirthplaces().subscribe(
      x => {
        this.items = x;
      }

    );

  }


  ngOnInit() {
  }

  clickedMarker(id: string) {
    console.log(id);
    this.selectedBirthplace.next(id);
    this.router.navigate(['/birthplaces/details', id]);
  }

  updateCards($event: LatLngBounds) {
    // console.log($event.getCenter());
    /*for (let marker of this.markers) {
      // let thislatlong = new LatLngLiteral(marker.lat, marker.lng )
      // let latlng = <LatLngLiteral>{lat: marker.lat, lng: marker.lng};
      let latLng = new MarkerAGM()
      latLng.constructor(marker.lat, marker.lng);
      marker.visible = $event.contains(latLng) ? true : false;
      // marker.label = Date.now().toString();
      // console.log(marker);
      // console.log(this.markers);
     /* if (marker.lat < $event.getNorthEast().lat() &&
        marker.lng < $event.getNorthEast().lng() &&
        marker.lat > $event.getSouthWest().lat() &&
      marker.lng > $event.getSouthWest().lng()) {
          console.log("inside", marker);
      }*/

    //}
  }
}
