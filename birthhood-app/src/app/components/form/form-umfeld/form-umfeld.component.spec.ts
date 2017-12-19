import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUmfeldComponent } from './form-umfeld.component';

describe('FormUmfeldComponent', () => {
  let component: FormUmfeldComponent;
  let fixture: ComponentFixture<FormUmfeldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUmfeldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUmfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
