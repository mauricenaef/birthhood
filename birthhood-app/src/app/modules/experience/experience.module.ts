import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserExperienceAddComponent } from './user-experience-add/user-experience-add.component';
import { UserExperienceListComponent } from './user-experience-list/user-experience-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserDashboardComponent, UserExperienceAddComponent, UserExperienceListComponent]
})
export class ExperienceModule { }
