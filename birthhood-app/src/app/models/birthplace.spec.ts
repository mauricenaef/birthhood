import {Birthplace} from './birthplace'; 
import { LatLngLiteral } from "@agm/core/services/google-maps-types";

fdescribe('Class: Birthplace', () => { 
    let birthplace: Birthplace;

  beforeEach(() => { 
    birthplace = new Birthplace({
        lat: 45,
        lng: 7
    });
  });

  afterEach(() => { 
    birthplace = null;
    
  });

  it('should calculate the correct distance', () => { 
    let distance = birthplace.distance(<LatLngLiteral>{lat:45, lng:7})
    expect(distance).toBe(0); 
  });
});