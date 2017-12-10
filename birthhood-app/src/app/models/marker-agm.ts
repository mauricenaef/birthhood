import  { LatLng } from '@agm/core';

export class MarkerAGM implements LatLng{
/* Bug in AGM - das Interface erwartet Functions als Return values, GoogleMaps jedoch Floats.
Deshalb als Type "any".
 */
  public lat: any;
  public lng: any;

  "constructor"(lat: number, lng: number) {

    this.lat = lat;
    this.lng = lng;
  }

}