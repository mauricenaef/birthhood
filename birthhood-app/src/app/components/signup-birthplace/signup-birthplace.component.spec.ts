import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBirthplaceComponent } from './signup-birthplace.component';

describe('SignupBirthplaceComponent', () => {
  let component: SignupBirthplaceComponent;
  let fixture: ComponentFixture<SignupBirthplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupBirthplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupBirthplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
