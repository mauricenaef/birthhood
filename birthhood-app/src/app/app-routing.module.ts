import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIRouter }  from "@uirouter/angular";

import { BirthplacesComponent } from './components/birthplaces/birthplaces.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BirthplaceDetailsComponent } from './components/birthplace-details/birthplace-details.component';
import { BirthplacesListComponent } from './components/birthplaces-list/birthplaces-list.component';
import { UserExperienceAddComponent } from './modules/experience/user-experience-add/user-experience-add.component';

import { FormFlowService } from './services/form-flow.service';

const routes: Routes = [
  { path: '', redirectTo: '/birthplaces', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'experience/new', component: UserExperienceAddComponent},
  /*{ path: 'birthplace-details/:id', component: BirthplaceDetailsComponent },*/
  {
    path: 'birthplaces', component: BirthplacesComponent,
    children: [
      /*{ path: '', redirectTo: 'overview', pathMatch: 'full' },*/
      { path: '', component: BirthplacesListComponent },
      { path: 'details/:id', component: BirthplaceDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }