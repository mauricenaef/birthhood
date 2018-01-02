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
import { ExperienceAddEmotionalComponent } from './components/experience-add-emotional/experience-add-emotional.component';
import { ExperienceAddKoerperlichComponent } from './components/experience-add-koerperlich/experience-add-koerperlich.component';
import { ExperienceAddMentalComponent } from './components/experience-add-mental/experience-add-mental.component';
import { ExperienceAddWochenbettComponent } from './components/experience-add-wochenbett/experience-add-wochenbett.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExperienceAddComponent, ExperienceAddBioComponent, ExperienceAddNavbarComponent, ExperienceAddUmgebungComponent, UserDashboardSidebarComponent, UserDashboardComponent, UserExperienceListComponent, ExperienceDynamicFormComponent, ExperienceAddEmotionalComponent, ExperienceAddKoerperlichComponent, ExperienceAddMentalComponent, ExperienceAddWochenbettComponent ],
  providers: [
    ExperienceService
  ]
})
export class ExperienceModule { }
