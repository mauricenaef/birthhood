import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAddBioComponent } from './experience-add-bio.component';

describe('ExperienceAddBioComponent', () => {
  let component: ExperienceAddBioComponent;
  let fixture: ComponentFixture<ExperienceAddBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAddBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAddBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
