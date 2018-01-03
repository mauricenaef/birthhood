import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAddUmfeldComponent } from './experience-add-umfeld.component';

describe('ExperienceAddUmfeldComponent', () => {
  let component: ExperienceAddUmfeldComponent;
  let fixture: ComponentFixture<ExperienceAddUmfeldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAddUmfeldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAddUmfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
