import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAddUmgebungComponent } from './experience-add-umgebung.component';

describe('ExperienceAddUmgebungComponent', () => {
  let component: ExperienceAddUmgebungComponent;
  let fixture: ComponentFixture<ExperienceAddUmgebungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAddUmgebungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAddUmgebungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
