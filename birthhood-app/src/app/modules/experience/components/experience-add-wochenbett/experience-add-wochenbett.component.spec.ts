import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAddWochenbettComponent } from './experience-add-wochenbett.component';

describe('ExperienceAddWochenbettComponent', () => {
  let component: ExperienceAddWochenbettComponent;
  let fixture: ComponentFixture<ExperienceAddWochenbettComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAddWochenbettComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAddWochenbettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
