import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAddKoerperlichComponent } from './experience-add-koerperlich.component';

describe('ExperienceAddKoerperlichComponent', () => {
  let component: ExperienceAddKoerperlichComponent;
  let fixture: ComponentFixture<ExperienceAddKoerperlichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAddKoerperlichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAddKoerperlichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
