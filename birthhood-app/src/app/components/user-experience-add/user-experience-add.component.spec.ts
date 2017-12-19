import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExperienceAddComponent } from './user-experience-add.component';

describe('UserExperienceAddComponent', () => {
  let component: UserExperienceAddComponent;
  let fixture: ComponentFixture<UserExperienceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExperienceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExperienceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
