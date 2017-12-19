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
import { UserDashboardComponent } from './modules/experience/user-dashboard/user-dashboard.component';
import { UserExperienceAddComponent } from './modules/experience/user-experience-add/user-experience-add.component';
import { UserExperienceListComponent } from './modules/experience/user-experience-list/user-experience-list.component';
import { FormNavbarComponent } from './components/form/form-navbar/form-navbar.component';
import { FormPersonelComponent } from './components/form/form-personel/form-personel.component';

import { FormDataService } from './services/form-data.service';
import { FormFlowService } from './services/form-flow.service';
import { FormUmfeldComponent } from './components/form/form-umfeld/form-umfeld.component';
import { UIRouterConfigFn, appStates } from './app.states';



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
    FormNavbarComponent,
    FormPersonelComponent,
    FormUmfeldComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule, 
    /*UIRouterModule.forRoot({ 
      states: appStates,
      useHash: true,
      config: UIRouterConfigFn
    }),*/
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnyvyYQD2Kf70Qkxbmk0Q6RFBw-FKCJbU'
    })
  ],
  providers: [BirthplaceService, ExperienceService, AuthService, GoogleMapsAPIWrapper, FormDataService, FormFlowService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
