import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthplacesMapComponent } from './birthplaces-map.component';

describe('BirthplacesMapComponent', () => {
  let component: BirthplacesMapComponent;
  let fixture: ComponentFixture<BirthplacesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthplacesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthplacesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
