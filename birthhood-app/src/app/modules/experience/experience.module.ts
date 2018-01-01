import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceAddComponent } from './components/experience-add/experience-add.component';
import { ExperienceAddBioComponent } from './components/experience-add-bio/experience-add-bio.component';
import { ExperienceAddNavbarComponent } from './components/experience-add-navbar/experience-add-navbar.component';
import { ExperienceAddUmgebungComponent } from './components/experience-add-umgebung/experience-add-umgebung.component';
import { UserDashboardSidebarComponent } from './components/user-dashboard-sidebar/user-dashboard-sidebar.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserExperienceListComponent } from './components/user-experience-list/user-experience-list.component';
import { ExperienceService } from './services/experience.service';
import { ExperienceDynamicFormComponent } from './components/experience-dynamic-form/experience-dynamic-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExperienceAddComponent, ExperienceAddBioComponent, ExperienceAddNavbarComponent, ExperienceAddUmgebungComponent, UserDashboardSidebarComponent, UserDashboardComponent, UserExperienceListComponent, ExperienceDynamicFormComponent ],
  providers: [
    ExperienceService
  ]
})
export class ExperienceModule { }
