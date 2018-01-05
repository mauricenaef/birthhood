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
import { NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import * as mapstyles from '../../../../../assets/config/map-styles.json';
declare var google: any;

@Component({
  selector: 'app-birthplaces-map',
  templateUrl: './birthplaces-map.component.html',
  styleUrls: ['./birthplaces-map.component.scss'],
  outputs: ['selectedBirthplace']
})
export class BirthplacesMapComponent implements OnInit, OnDestroy {

  // Custom Map Styles
  public styles;

  isDetail: boolean = false;

  @ViewChild(AgmMap) private map: any;
  items$: Observable<any[]>;

  latLng: LatLngLiteral;
  zoomOutNumber: number = 3;
  bounds: LatLngBounds;

  routersubscription: Subscription;
  
  constructor(public birthplaceService: BirthplaceService, public router: Router) {
    /*fallback-location. HSR?*/
    this.latLng = <LatLngLiteral>{
      lat: 47.2,
      lng: 8.6
    };

    this.styles = mapstyles;

    this.items$ = birthplaceService.getBirhplacesOnMap();

    //subscribe for zoom to clicked Birthplace
    birthplaceService.birthplaceClicked$.subscribe(
      id => {
        this.birthplaceService.getBirthplace(id).subscribe(x => {
          let birthplace: Birthplace = x;
          this.map.triggerResize()
            .then(() => {
              /* panToBounds scheint nicht zu funktionieren. setCenter oder panTo oder fitBounds
              https://developers.google.com/maps/documentation/javascript/reference?
              Hack: https://codepen.io/j4k/pen/gPmdWN */

              this.map._mapsWrapper.fitBounds(this.generateBounds(
                { lat: birthplace.lat, lng: birthplace.lng },
                0.0005
              ))
            })
        });
      });
    // subscribe for zoom out when navigating back to the map
    birthplaceService.zoomOut$.subscribe(x => this.zoomOut());

    // subscribe for detail to zoom in on marker
    this.routersubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects == "/birthplaces") {
          this.isDetail = false;
        } else {
          this.isDetail = true;
        }
      }
    })
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

  ngOnDestroy() {
    this.routersubscription.unsubscribe();
  }
  private generateBounds(latLng: LatLngLiteral, buffer: number): LatLngBoundsLiteral {
    return {
      east: latLng.lng + buffer,
      north: latLng.lat + buffer,
      south: latLng.lat - buffer,
      west: latLng.lng - buffer
    }
  }

  // to prevent flickering of map items
  trackFbObjects = (idx, obj) => obj.$key;

  clickedMarker(id: string) {
    this.router.navigate(['/birthplaces/details', id]);

  }

  zoomOut() {
    // show full map
    this.birthplaceService.getBirthplacesFiltered().subscribe(
      birthplaces => {

        birthplaces.sort((x, y) => new Birthplace(x).distance(this.latLng) - new Birthplace(y).distance(this.latLng));
        let nearestBirthplaces: Birthplace[] = birthplaces.slice(0, this.zoomOutNumber);
        let bounds: LatLngBounds = new google.maps.LatLngBounds();

        nearestBirthplaces.forEach(
          thisBirthplace => {
            let latLngObject = new google.maps.LatLng(thisBirthplace.lat, thisBirthplace.lng);
            bounds.extend(latLngObject);
          }
        );

        this.map.triggerResize()
          .then(() => {
            this.map._mapsWrapper.fitBounds(bounds);
          })
      }
    );
  }
}
