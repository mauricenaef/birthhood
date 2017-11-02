import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule, } from 'angularfire2';
import { AngularFirestoreModule, } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { ExperiencesComponent } from './experiences/experiences.component';
import { RouterModule, Routes } from '@angular/router';
import { BirthplacesComponent } from './birthplaces/birthplaces.component';
import { AuthService } from './services/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { AgmCoreModule } from '@agm/core';


const appRoutes: Routes = [
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'birthplaces', component: BirthplacesComponent },

  { path: 'login-page', component: LoginPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    BirthplacesComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnyvyYQD2Kf70Qkxbmk0Q6RFBw-FKCJbU'
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
