import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { UIRouter }  from "@uirouter/angular";

import { BirthplacesComponent } from './components/birthplaces/birthplaces.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BirthplaceDetailsComponent } from './components/birthplace-details/birthplace-details.component';
import { BirthplacesListComponent } from './components/birthplaces-list/birthplaces-list.component';


import { ExperienceAddBioComponent } from './modules/experience/components/experience-add-bio/experience-add-bio.component';
import { ExperienceAddUmfeldComponent } from './modules/experience/components/experience-add-umfeld/experience-add-umfeld.component';
import { ExperienceAddComponent } from './modules/experience/components/experience-add/experience-add.component';
import { UserDashboardComponent } from './modules/experience/components/user-dashboard/user-dashboard.component';
import { UserExperienceListComponent } from './modules/experience/components/user-experience-list/user-experience-list.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/birthplaces', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  /* {
    path: 'experience/new', component: ExperienceAddComponent,
    children: [
      { path: '', component: ExperienceAddBioComponent },
      { path: 'bio', component: ExperienceAddBioComponent },
      { path: 'umfeld', component: ExperienceAddUmfeldComponent }
    ]
  }, */
  {
    path: 'birthplaces', component: BirthplacesComponent,
    children: [
      /*{ path: '', redirectTo: 'overview', pathMatch: 'full' },*/
      { path: '', component: BirthplacesListComponent },
      { path: 'details/:id', component: BirthplaceDetailsComponent }
    ]
  },
  {
    path: 'user-dashboard', component: UserDashboardComponent,
    children: [
      { path: '', component: UserExperienceListComponent },
      { 
        path: 'experience/new', component: ExperienceAddComponent,
        canActivate: [AuthGuard],
        children: [
          /*{ path: '', redirectTo: 'overview', pathMatch: 'full' },*/
          { path: '', component: ExperienceAddBioComponent },
          { path: 'bio', component: ExperienceAddBioComponent },
          { path: 'umfeld', component: ExperienceAddUmfeldComponent }
        ]
     }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes/*,
      { enableTracing: true } */// <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }