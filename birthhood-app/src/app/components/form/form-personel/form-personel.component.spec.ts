import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonelComponent } from './form-personel.component';

describe('FormPersonelComponent', () => {
  let component: FormPersonelComponent;
  let fixture: ComponentFixture<FormPersonelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPersonelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
