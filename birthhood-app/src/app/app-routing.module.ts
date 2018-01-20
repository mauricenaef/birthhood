import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { UIRouter }  from "@uirouter/angular";

import { BirthplacesComponent } from './modules/birthplace/components/birthplaces/birthplaces.component';
import { SignupComponent } from './modules/login/components/signup/signup.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { BirthplaceDetailsComponent } from './modules/birthplace/components/birthplace-details/birthplace-details.component';
import { BirthplacesListComponent } from './modules/birthplace/components/birthplaces-list/birthplaces-list.component';
import { ExperienceAddBioComponent } from './modules/experience/components/experience-add-bio/experience-add-bio.component';
import { ExperienceAddUmgebungComponent } from './modules/experience/components/experience-add-umgebung/experience-add-umgebung.component';
import { ExperienceAddComponent } from './modules/experience/components/experience-add/experience-add.component';
import { UserDashboardComponent } from './modules/experience/components/user-dashboard/user-dashboard.component';
import { UserExperienceListComponent } from './modules/experience/components/user-experience-list/user-experience-list.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ExperienceAddEmotionalComponent } from './modules/experience/components/experience-add-emotional/experience-add-emotional.component';
import { ExperienceAddWochenbettComponent } from './modules/experience/components/experience-add-wochenbett/experience-add-wochenbett.component';
import { ExperienceAddMentalComponent } from './modules/experience/components/experience-add-mental/experience-add-mental.component';
import { ExperienceAddKoerperlichComponent } from './modules/experience/components/experience-add-koerperlich/experience-add-koerperlich.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { SignupBirthplaceComponent } from './components/signup-birthplace/signup-birthplace.component';
import { BirthcriteriaComponent } from './components/birthcriteria/birthcriteria.component';
import { MetaGuard, MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';

const routes: Routes = [
  { path: '', redirectTo: '/birthplaces', pathMatch: 'full' },

  { path: 'about', component: AboutComponent },
  { path: 'birthcriteria', component: BirthcriteriaComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'signup-birthplace', component: SignupBirthplaceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'birthplaces',
    canActivateChild: [MetaGuard],
    component: BirthplacesComponent,
    children: [
      {
        path: '',
        component: BirthplacesListComponent,
        data: {
          meta: {
            title: 'Willkommen'
          }
        }
      },
      { path: 'details/:id',
      component: BirthplaceDetailsComponent,
     }
    ]
  },
  {
    path: 'user-dashboard', component: UserDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: UserExperienceListComponent },
      {
        path: 'experience/new', component: ExperienceAddComponent,
        children: [
          { path: '', component: ExperienceAddBioComponent },
          { path: 'bio', component: ExperienceAddBioComponent },
          { path: 'umgebung', component: ExperienceAddUmgebungComponent },
          { path: 'emotional', component: ExperienceAddEmotionalComponent },
          { path: 'koerperlich', component: ExperienceAddKoerperlichComponent },
          { path: 'mental', component: ExperienceAddMentalComponent },
          { path: 'wochenbett', component: ExperienceAddWochenbettComponent }
        ]
      }
    ]
  }
];

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: 'birthhood',
    defaults: {
      title: 'Der Geburtsortfinder',
      description: 'Finden Sie den geeigneten Geburtsort für Sie und Ihr Kind',
      'og:image': 'https://birthhood.org/icon.png',
      'og:type': 'website',
      'og:locale': 'ch_DE',
      'og:locale:alternate': ''
    }
  });
}

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes/*,
      { enableTracing: true } */// <-- debugging purposes only
    ),
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory)
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }