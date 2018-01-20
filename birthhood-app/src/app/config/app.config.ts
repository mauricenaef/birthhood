import { LatLngLiteral } from "@agm/core";

export const appConfig = {
    map: {
        /**initial Map Position */
        initialLatLng : <LatLngLiteral>{
            lat: 47.2,
            lng: 8.6
          },
        /** zoom out Factor for Detail-View of Map */
        zoomFactor : 0.0005,
        /** zoom Map out to display at least this number of Birthplaces */
        zoomOutNumber: 3,
        /** map-Gesture-handlig */
        gestureHandling: "greedy"


    },
    list: {
        /** max items to display in Carousel */
        maxItems: 9
    }
    
};