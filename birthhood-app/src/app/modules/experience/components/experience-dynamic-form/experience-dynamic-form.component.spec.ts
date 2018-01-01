import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDynamicFormComponent } from './experience-dynamic-form.component';

describe('ExperienceDynamicFormComponent', () => {
  let component: ExperienceDynamicFormComponent;
  let fixture: ComponentFixture<ExperienceDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
