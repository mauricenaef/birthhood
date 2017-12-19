import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExperienceListComponent } from './user-experience-list.component';

describe('UserExperienceListComponent', () => {
  let component: UserExperienceListComponent;
  let fixture: ComponentFixture<UserExperienceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExperienceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
