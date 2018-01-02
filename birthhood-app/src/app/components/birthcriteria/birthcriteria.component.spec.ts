import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthcriteriaComponent } from './birthcriteria.component';

describe('BirthcriteriaComponent', () => {
  let component: BirthcriteriaComponent;
  let fixture: ComponentFixture<BirthcriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthcriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthcriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
