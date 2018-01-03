import { Birthplace } from './birthplace';
import { LatLngLiteral } from "@agm/core/services/google-maps-types";

describe('Class: Birthplace', () => {
    let birthplace: Birthplace;

    it('should calculate the correct distance', () => {
        birthplace = new Birthplace({
            lat: 45,
            lng: 7
        });
        let distance = birthplace.distance(<LatLngLiteral>{ lat: 45, lng: 7 });
        let distance2 = birthplace.distance(<LatLngLiteral>{ lat: 45, lng: 8 });
        expect(distance).toBe(0);
        expect(distance2).toBe(78.62618767687454);
    });
});