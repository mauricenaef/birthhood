import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserExperienceAddComponent } from './user-experience-add/user-experience-add.component';
import { UserExperienceListComponent } from './user-experience-list/user-experience-list.component';
import { FormNavbarComponent } from './user-experience-add/components/form-navbar/form-navbar.component';
import { FormBioComponent } from './user-experience-add/components/form-bio/form-bio.component';
import { FormUmfeldComponent } from './user-experience-add/components/form-umfeld/form-umfeld.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserDashboardComponent, UserExperienceAddComponent, UserExperienceListComponent, FormNavbarComponent, FormBioComponent, FormUmfeldComponent]
})
export class ExperienceModule { }
