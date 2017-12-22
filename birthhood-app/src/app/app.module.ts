import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UIRouterModule } from "@uirouter/angular";


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
import { ExperienceService } from './services/experience.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';

import { UserDashboardComponent } from './modules/experience/user-dashboard/user-dashboard.component';
import { UserExperienceAddComponent } from './modules/experience/user-experience-add/user-experience-add.component';
import { UserExperienceListComponent } from './modules/experience/user-experience-list/user-experience-list.component';

import { FormNavbarComponent } from './modules/experience/user-experience-add/components/form-navbar/form-navbar.component';
import { FormBioComponent } from './modules/experience/user-experience-add/components/form-bio/form-bio.component';
import { FormUmfeldComponent } from './modules/experience/user-experience-add/components/form-umfeld/form-umfeld.component'

import { FormDataService } from './modules/experience/user-experience-add/services/form-data.service';
import { FormFlowService } from './modules/experience/user-experience-add/services/form-flow.service';



import { OwlModule } from 'ngx-owl-carousel';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { MainNavComponent } from './components/main-nav/main-nav.component';

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
    UserDashboardComponent,
    UserExperienceAddComponent,
    UserExperienceListComponent,
    SignupComponent,
    SearchComponent,
    FilterComponent,
    FormNavbarComponent,
    FormBioComponent,
    FormUmfeldComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule, 
    OwlModule,
    DateTimePickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnyvyYQD2Kf70Qkxbmk0Q6RFBw-FKCJbU'
    })
  ],
  providers: [BirthplaceService, ExperienceService, AuthService, GoogleMapsAPIWrapper, FormDataService, FormFlowService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
