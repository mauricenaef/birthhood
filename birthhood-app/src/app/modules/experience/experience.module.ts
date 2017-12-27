import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceAddComponent } from './components/experience-add/experience-add.component';
import { ExperienceAddBioComponent } from './components/experience-add-bio/experience-add-bio.component';
import { ExperienceAddNavbarComponent } from './components/experience-add-navbar/experience-add-navbar.component';
import { ExperienceAddUmfeldComponent } from './components/experience-add-umfeld/experience-add-umfeld.component';
import { UserDashboardSidebarComponent } from './components/user-dashboard-sidebar/user-dashboard-sidebar.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserExperienceListComponent } from './components/user-experience-list/user-experience-list.component';
import { ExperienceService } from './services/experience.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExperienceAddComponent, ExperienceAddBioComponent, ExperienceAddNavbarComponent, ExperienceAddUmfeldComponent, UserDashboardSidebarComponent, UserDashboardComponent, UserExperienceListComponent ],
  providers: [
    ExperienceService
  ]
})
export class ExperienceModule { }
