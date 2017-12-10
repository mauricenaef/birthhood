import { Component, OnInit , EventEmitter} from '@angular/core';
import { AgmCoreModule, LatLngLiteral, LatLngBounds, LatLng } from '@agm/core';
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


  items$: Observable<any[]>;
  public selectedBirthplace: EventEmitter<any> = new EventEmitter();
  /*these will be set by the geolocation of the Browser. 
  probably in ngOnInit()*/ 
  lat = 47.2632317;
  lng = 8.5893569;

  constructor(private birthplaceService: BirthplaceService, private router: Router) {
    birthplaceService.getBirthplaces().subscribe(
      x => {
        this.items$ = x;
      }

    );

  }


  ngOnInit() {

  }

  clickedMarker(id: string) {
    this.selectedBirthplace.next(id);
    this.router.navigate(['/birthplaces/details', id]);
    }

}
