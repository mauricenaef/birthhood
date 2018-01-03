import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { UIRouterModule } from "@uirouter/angular";

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AngularFireModule, } from 'angularfire2';
import { AngularFirestoreModule, } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { BirthplacesComponent } from './components/birthplaces/birthplaces.component';
import { BirthplacesMapComponent } from './components/birthplaces-map/birthplaces-map.component';
import { BirthplacesListComponent } from './components/birthplaces-list/birthplaces-list.component';
import { BirthplaceDetailsComponent } from './components/birthplace-details/birthplace-details.component';

import { FormsModule } from '@angular/forms';
import { BirthplaceService } from './services/birthplace.service';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';

import { OwlModule } from 'ngx-owl-carousel';

import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LoaderComponent } from './components/loader/loader.component';
/*import { ExperienceAddBioComponent } from './modules/experience/components/experience-add-bio/experience-add-bio.component';
import { ExperienceAddNavbarComponent } from './modules/experience/components/experience-add-navbar/experience-add-navbar.component';
import { ExperienceAddUmgebungComponent } from './modules/experience/components/experience-add-umgebung/experience-add-umgebung.component';
import { ExperienceAddComponent } from './modules/experience/components/experience-add/experience-add.component';
import { FormDataService } from './modules/experience/services/experience-form-data.service';
import { FormFlowService } from './modules/experience/services/form-flow.service';
import { UserExperienceListComponent } from './modules/experience/components/user-experience-list/user-experience-list.component';
import { UserDashboardComponent } from './modules/experience/components/user-dashboard/user-dashboard.component';
import { UserDashboardSidebarComponent } from './modules/experience/components/user-dashboard-sidebar/user-dashboard-sidebar.component';
import { ExperienceService } from './modules/experience/services/experience.service';
*/import { AuthGuard } from './shared/guards/auth.guard';
import { AboutComponent } from './components/about/about.component';
/*import { ExperienceDynamicFormComponent } from './modules/experience/components/experience-dynamic-form/experience-dynamic-form.component';
import { ExperienceAddEmotionalComponent } from './modules/experience/components/experience-add-emotional/experience-add-emotional.component';
import { ExperienceAddKoerperlichComponent } from './modules/experience/components/experience-add-koerperlich/experience-add-koerperlich.component';
import { ExperienceAddWochenbettComponent } from './modules/experience/components/experience-add-wochenbett/experience-add-wochenbett.component';
import { ExperienceAddMentalComponent } from './modules/experience/components/experience-add-mental/experience-add-mental.component';
*/
import { ToastrModule } from 'ngx-toastr';

import { ImpressumComponent } from './components/impressum/impressum.component';
import { ContactComponent } from './components/contact/contact.component';
import { BirthcriteriaComponent } from './components/birthcriteria/birthcriteria.component';
import { SignupBirthplaceComponent } from './components/signup-birthplace/signup-birthplace.component';
import { ExperienceModule } from './modules/experience/experience.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BirthplacesComponent,
    BirthplacesMapComponent,
    BirthplacesListComponent,
    BirthplaceDetailsComponent,
    /*UserDashboardComponent,
    UserExperienceListComponent,
    UserDashboardSidebarComponent,*/
    SignupComponent,
    SearchComponent,
    FilterComponent,
    MainNavComponent,
    LoaderComponent,
    /*ExperienceAddEmotionalComponent,
    ExperienceAddKoerperlichComponent,
    ExperienceAddWochenbettComponent,
    ExperienceAddMentalComponent,
    ExperienceAddBioComponent,
    ExperienceAddNavbarComponent,
    ExperienceAddUmgebungComponent,
    ExperienceAddComponent,*/
    AboutComponent,
    /*ExperienceDynamicFormComponent,*/

    ImpressumComponent,
    ContactComponent,
    BirthcriteriaComponent,
    SignupBirthplaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    OwlModule,
    FormsModule,
    ExperienceModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-full-width',
      autoDismiss: false,
      disableTimeOut: true,
      closeButton: true
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnyvyYQD2Kf70Qkxbmk0Q6RFBw-FKCJbU'
    })
  ],
  providers: [BirthplaceService, GoogleMapsAPIWrapper,/* FormDataService,
     FormFlowService, ExperienceService,*/
     AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
