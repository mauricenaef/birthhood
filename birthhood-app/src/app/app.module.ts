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
import { AuthGuard } from './shared/guards/auth.guard';
import { AboutComponent } from './components/about/about.component';

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
   
    SignupComponent,
    SearchComponent,
    FilterComponent,
    MainNavComponent,
    LoaderComponent,
   
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
  providers: [BirthplaceService, GoogleMapsAPIWrapper,
     AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
