import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceAddComponent } from './components/experience-add/experience-add.component';
import { ExperienceAddBioComponent } from './components/experience-add-bio/experience-add-bio.component';
import { ExperienceAddNavbarComponent } from './components/experience-add-navbar/experience-add-navbar.component';
import { ExperienceAddUmfeldComponent } from './components/experience-add-umfeld/experience-add-umfeld.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExperienceAddComponent, ExperienceAddBioComponent, ExperienceAddNavbarComponent, ExperienceAddUmfeldComponent ]
})
export class ExperienceModule { }
