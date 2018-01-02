import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAddMentalComponent } from './experience-add-mental.component';

describe('ExperienceAddMentalComponent', () => {
  let component: ExperienceAddMentalComponent;
  let fixture: ComponentFixture<ExperienceAddMentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAddMentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAddMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
