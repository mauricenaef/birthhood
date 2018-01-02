import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAddEmotionalComponent } from './experience-add-emotional.component';

describe('ExperienceAddEmotionalComponent', () => {
  let component: ExperienceAddEmotionalComponent;
  let fixture: ComponentFixture<ExperienceAddEmotionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAddEmotionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAddEmotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
