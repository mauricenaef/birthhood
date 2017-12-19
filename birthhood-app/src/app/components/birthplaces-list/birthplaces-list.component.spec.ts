import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthplacesListComponent } from './birthplaces-list.component';

describe('BirthplacesListComponent', () => {
  let component: BirthplacesListComponent;
  let fixture: ComponentFixture<BirthplacesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthplacesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthplacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
