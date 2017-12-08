import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthplacesDetailComponent } from './birthplaces-detail.component';

describe('BirthplacesDetailComponent', () => {
  let component: BirthplacesDetailComponent;
  let fixture: ComponentFixture<BirthplacesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthplacesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthplacesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
