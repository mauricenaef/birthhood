import { LatLngLiteral } from "@agm/core/services/google-maps-types";

export class Birthplace {
    lat: number;
    lng: number;
    name: string;
    ort: string;
    plz: number;
    short_name: string;
    strasse: string;
    type: string;
    url: string;
    id: string;
    experiences: number;
    score_e: number;
    score_k: number;
    score_m: number;
    score_u: number;
    score_w: number;

    public constructor(input) {
        this.lat = input.lat;
        this.lng = input.lng;
        this.name = input.name;
        this.ort = input.ort;
        this.plz = input.plz;
        this.short_name = input.short_name;
        this.strasse = input.strasse;;
        this.type = input.type;
        this.url = input.url;
        this.id = input.id;
        this.experiences = input.experiences;
        this.score_e = input.score_e;
        this.score_k = input.score_k;
        this.score_m = input.score_m;
        this.score_u = input.score_u;
        this.score_w = input.score_w;
    }
    private rad(x) {
        return x * Math.PI / 180;
    }

    public distance(mapCenter: LatLngLiteral): number {
        // radius of earth in km
        let R = 6371;

        let dLat = this.rad(this.lat - mapCenter.lat);
        let dLong = this.rad(this.lng - mapCenter.lng);
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.rad(mapCenter.lat)) * Math.cos(this.rad(mapCenter.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    get score(): number {
        let sum: number = 0;
        let count: number = 0;
        let scoreletters: string[] = ["e", "k", "m", "u", "w"]
        for (let scoreletter of scoreletters) {
            let thisScore: number = this["score_" + scoreletter];
            if (thisScore) {
                sum += thisScore;
                count++
            }
        }
        return sum / count;
    }
}
