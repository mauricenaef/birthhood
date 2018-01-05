import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule, } from 'angularfire2';
import { AngularFirestoreModule, } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';


import { MainNavComponent } from './components/main-nav/main-nav.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AboutComponent } from './components/about/about.component';

import { ToastrModule } from 'ngx-toastr';

import { ImpressumComponent } from './components/impressum/impressum.component';
import { ContactComponent } from './components/contact/contact.component';
import { BirthcriteriaComponent } from './components/birthcriteria/birthcriteria.component';
import { SignupBirthplaceComponent } from './components/signup-birthplace/signup-birthplace.component';
import { ExperienceModule } from './modules/experience/experience.module';
import { LoginModule } from './modules/login/login.module';
import { BirthplaceModule } from './modules/birthplace/birthplace.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    MainNavComponent,
    AboutComponent,
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

    FormsModule,
    BirthplaceModule,
    LoginModule,
    ExperienceModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-full-width',
      autoDismiss: false,
      disableTimeOut: true,
      closeButton: true
    }),

  ],
  providers: [
     AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
