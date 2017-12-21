import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBioComponent } from './form-bio.component';

describe('FormBioComponent', () => {
  let component: FormBioComponent;
  let fixture: ComponentFixture<FormBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
