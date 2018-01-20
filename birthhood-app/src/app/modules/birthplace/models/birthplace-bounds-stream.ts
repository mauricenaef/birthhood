import { BirthplaceFilter } from "./birthplace-filter";
import { LatLngBounds } from "@agm/core";

export class BirthplaceBoundsStream {
    bounds: LatLngBounds;
    filter: BirthplaceFilter;
}
