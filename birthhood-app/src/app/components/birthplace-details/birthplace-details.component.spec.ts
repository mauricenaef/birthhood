import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthplaceDetailsComponent } from './birthplace-details.component';

describe('BirthplaceDetailComponent', () => {
  let component: BirthplaceDetailsComponent;
  let fixture: ComponentFixture<BirthplaceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthplaceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthplaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
