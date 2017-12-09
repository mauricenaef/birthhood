


import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BirthplacesComponent }   from './components/birthplaces/birthplaces.component';
import { SignupComponent }   from './components/signup/signup.component';
import { LoginComponent }   from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/birthplaces', pathMatch: 'full' },
  { path: 'birthplaces', component: BirthplacesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

