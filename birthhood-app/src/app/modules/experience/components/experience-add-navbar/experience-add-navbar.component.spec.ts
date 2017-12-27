import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAddNavbarComponent } from './experience-add-navbar.component';

describe('ExperienceAddNavbarComponent', () => {
  let component: ExperienceAddNavbarComponent;
  let fixture: ComponentFixture<ExperienceAddNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAddNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAddNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
