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
import { BirthplacesDetailComponent } from './components/birthplaces-detail/birthplaces-detail.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserExperienceAddComponent } from './components/user-experience-add/user-experience-add.component';
import { UserExperienceListComponent } from './components/user-experience-list/user-experience-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BirthplacesComponent,
    BirthplacesMapComponent,
    BirthplacesListComponent,
    BirthplacesDetailComponent,
    UserDashboardComponent,
    UserExperienceAddComponent,
    UserExperienceListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
