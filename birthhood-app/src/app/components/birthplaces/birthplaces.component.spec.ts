import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthplacesComponent } from './birthplaces.component';

describe('BirthplacesComponent', () => {
  let component: BirthplacesComponent;
  let fixture: ComponentFixture<BirthplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
