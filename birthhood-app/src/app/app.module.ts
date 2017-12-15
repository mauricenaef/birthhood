import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserExperienceAddComponent } from './components/user-experience-add/user-experience-add.component';
import { UserExperienceListComponent } from './components/user-experience-list/user-experience-list.component';
import { FormsModule } from '@angular/forms';
import { BirthplaceService } from './services/birthplace.service';
import { ExperienceService } from './services/experience.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';

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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule, 
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnyvyYQD2Kf70Qkxbmk0Q6RFBw-FKCJbU'
    })
  ],
  providers: [BirthplaceService, ExperienceService, AuthService, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
