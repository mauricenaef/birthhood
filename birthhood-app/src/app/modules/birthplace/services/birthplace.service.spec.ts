import { TestBed, inject } from '@angular/core/testing';

import { BirthplaceService } from './birthplace.service';
import { AngularFireModule, } from 'angularfire2';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from  'rxjs/Rx';


import { AgmCoreModule, GoogleMapsAPIWrapper, MapsAPILoader, LatLngBounds, LatLng } from '@agm/core';
import { BirthplaceFilter } from '../models/birthplace-filter';


  const input = [[{
    payload : {
      doc :{
        id: 1,
        data(){ 
          return {
            type: "geburtshaus",
            name: "das Geburtshaus"
          }
      }}
    }
  },{
    payload : {
      doc :{
        id: 2,
        data(){ 
          return {
            type: "spital",
            name: "das Spital"
          }
      }}
    }
  }]]
 

  const data = Observable.from(input);

  const collectionStub = {
    snapshotChanges: jasmine.createSpy('snapshotChanges').and.returnValue(data)
  }
  
  const angularFirestoreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  }
describe('BirthplaceService - mockdata', () => {
  let service: BirthplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        BrowserModule,
        AgmCoreModule,
        AngularFirestoreModule
      ],
      providers: [GoogleMapsAPIWrapper, MapsAPILoader, BirthplaceService,
        { provide: AngularFirestore, useValue: angularFirestoreStub }]
    });
    service = TestBed.get(BirthplaceService);
  });

  it('should be created', inject([BirthplaceService], (service: BirthplaceService) => {
    expect(service).toBeTruthy();
  }));

  it('should return all data', () => {
    service.getBirthplacesFiltered().subscribe(
      x => {
        expect(x.length).toEqual(2);
      }
    );
  });

  it('should return correctly filtered spital data', () => {
    service.updateFilter(<BirthplaceFilter>{spital: true, geburtshaus: false})
    service.getBirthplacesFiltered().subscribe(
      x => {
        expect(x.length).toEqual(1);
        expect(x[0].type).toEqual("spital");
      }
    );
  });

  it('should return correctly filtered geburtshaus data', () => {
    service.updateFilter(<BirthplaceFilter>{spital: false, geburtshaus: true})
    service.getBirthplacesFiltered().subscribe(
      x => {
        expect(x.length).toEqual(1);
        expect(x[0].type).toEqual("geburtshaus");
      }
    );
  });

  it('should return correct searchresults', () => {
    service.search("ital").subscribe(
      x => {
        expect(x.length).toEqual(1);
        expect(x[0].name).toEqual("das Spital");
      }
    );
  });
});
