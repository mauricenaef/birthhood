import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { AgmCoreModule, LatLngLiteral, LatLngBoundsLiteral, LatLng } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { BirthplaceService } from '../../services/birthplace.service';
import { Router } from '@angular/router';
import { AgmMap } from '@agm/core/directives/map';
import { Subject } from 'rxjs/Subject';
import { Location } from "@angular/common";
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
          "hue": "#ff4400"
        },
        {
          "saturation": -100
        },
        {
          "lightness": -4
        },
        {
          "gamma": 0.72
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon"
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry",
      "stylers": [
        {
          "hue": "#0077ff"
        },
        {
          "gamma": 3.1
        }
      ]
    },
    {
      "featureType": "water",
      "stylers": [
        {
          "hue": "#00ccff"
        },
        {
          "gamma": 0.44
        },
        {
          "saturation": -33
        }
      ]
    },
    {
      "featureType": "poi.park",
      "stylers": [
        {
          "hue": "#44ff00"
        },
        {
          "saturation": -23
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "hue": "#007fff"
        },
        {
          "gamma": 0.77
        },
        {
          "saturation": 65
        },
        {
          "lightness": 99
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "gamma": 0.11
        },
        {
          "weight": 5.6
        },
        {
          "saturation": 99
        },
        {
          "hue": "#0091ff"
        },
        {
          "lightness": -86
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "lightness": -48
        },
        {
          "hue": "#ff5e00"
        },
        {
          "gamma": 1.2
        },
        {
          "saturation": -23
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "saturation": -64
        },
        {
          "hue": "#ff9100"
        },
        {
          "lightness": 16
        },
        {
          "gamma": 0.47
        },
        {
          "weight": 2.7
        }
      ]
    }
  ];

  @ViewChild(AgmMap) private map: any;
  items$: Observable<any[]>;


  latLng: LatLngLiteral;
  // radius of earth in km
  R = 6371;
  zoomOutNumber = 3;
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
    this.router.navigate(['/birthplaces/details', id]);
  }

  private rad(x) {
    return x * Math.PI / 180;
  }

  private calculateDistance(item): number {
    let mlat = item.lat;
    let mlng = item.lng;
    let dLat = this.rad(mlat - this.latLng.lat);
    let dLong = this.rad(mlng - this.latLng.lng);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(this.latLng.lat)) * Math.cos(this.rad(this.latLng.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return this.R * c;

  }
  zoomOut() {
    let itemsWithDistances = [];
    this.birthplaceService.getBirthplacesFiltered().subscribe(
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
        this.map._mapsWrapper.setCenter(this.latLng);
      }
    );
  }
}
