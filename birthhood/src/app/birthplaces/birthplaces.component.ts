import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BirthplaceService} from '../services/birthplace.service';

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
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
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

