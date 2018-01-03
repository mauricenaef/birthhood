import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { AgmCoreModule, LatLngLiteral, LatLngBoundsLiteral, LatLng } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { BirthplaceService } from '../../services/birthplace.service';
import { Router } from '@angular/router';
import { AgmMap } from '@agm/core/directives/map';
import { Subject } from 'rxjs/Subject';
import { Location } from "@angular/common";
import { Birthplace } from '../../models/birthplace';
import { LatLngBounds } from '@agm/core/services/google-maps-types';
declare var google: any;

@Component({
  selector: 'app-birthplaces-map',
  templateUrl: './birthplaces-map.component.html',
  styleUrls: ['./birthplaces-map.component.scss'],
  outputs: ['selectedBirthplace']
})
export class BirthplacesMapComponent implements OnInit {

  // Custom Map Styles
  public styles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ];

  isDetail: boolean = false;

  @ViewChild(AgmMap) private map: any;
  items$: Observable<any[]>;


  latLng: LatLngLiteral;
  zoomOutNumber: number = 3;
  bounds: LatLngBoundsLiteral;

  constructor(public birthplaceService: BirthplaceService, private router: Router) {
    /*
fallback-location. HSR?*/
    this.latLng = <LatLngLiteral>{
      lat: 47.2,
      lng: 8.6
    };


    this.items$ = birthplaceService.getBirhplacesOnMap();
    
    //zoom to clicked Birthplace
    birthplaceService.birthplaceClicked$.subscribe(
      id => {
        this.birthplaceService.getBirthplace(id).subscribe(x => {
          let birthplace: Birthplace = x;
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

    birthplaceService.zoomOut$.subscribe(x => this.zoomOut());
  }



  ngOnInit() {
    //only zoom out if not on Detail Page
    if (this.router.url == "/birthplaces") {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.latLng = <LatLngLiteral>{
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.zoomOut();
        });
      }
    }
  }

  private generateBounds(latLng: LatLngLiteral, buffer: number): LatLngBoundsLiteral {
    return {
      east: latLng.lng + buffer,
      north: latLng.lat + buffer,
      south: latLng.lat - buffer,
      west: latLng.lng - buffer
    }
  }

  //um punkte weniger flickern zu lassen
  trackFbObjects = (idx, obj) => obj.$key;

  clickedMarker(id: string) {
    // make map small
    this.router.navigate(['/birthplaces/details', id]);
    // add class detail true to map
    this.isDetail = true;
  }

  zoomOut() {

    // full map
    this.birthplaceService.getBirthplacesFiltered().subscribe(
      birthplaces=> {

        birthplaces.sort((x, y) => new Birthplace(x).distance(this.latLng) - new Birthplace(y).distance(this.latLng));
        let nearestBirthplaces: Birthplace[] = birthplaces.slice(0, this.zoomOutNumber);
        let bounds: LatLngBounds = new google.maps.LatLngBounds();

        nearestBirthplaces.forEach(
          thisBirthplace => {
            let latLngObject = new google.maps.LatLng(thisBirthplace.lat, thisBirthplace.lng);
            bounds.extend(latLngObject);
          }
        );

        this.map._mapsWrapper.fitBounds(bounds);
        this.map._mapsWrapper.setCenter(this.latLng);
        // remove class detail true map
        this.isDetail = false;
      }
    );
  }
}
