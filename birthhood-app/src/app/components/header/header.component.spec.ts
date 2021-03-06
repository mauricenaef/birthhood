import { async, ComponentFixture, tick, fakeAsync, TestBed } from '@angular/core/testing';
import { Location } from "@angular/common";
import { HeaderComponent } from './header.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule, } from 'angularfire2';
import { AngularFirestoreModule, } from 'angularfire2/firestore';
import { AppRoutingModule } from '../../app-routing.module';
import { LoginComponent } from '../../modules/login/components/login/login.component';
import { APP_BASE_HREF } from '@angular/common';
import { BirthplacesComponent } from '../../modules/birthplace/components/birthplaces/birthplaces.component';
import { SignupComponent } from '../../modules/login/components/signup/signup.component';
import { BirthplacesMapComponent } from '../../modules/birthplace/components/birthplaces-map/birthplaces-map.component';
import { BirthplacesListComponent } from '../../modules/birthplace/components/birthplaces-list/birthplaces-list.component';
import { BirthplaceDetailsComponent } from '../../modules/birthplace/components/birthplace-details/birthplace-details.component';
import { SearchComponent } from '../../modules/birthplace/components/search/search.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import { OwlModule } from 'ngx-owl-carousel';

import { DateTimePickerModule } from 'ng-pick-datetime';
import { ExperienceModule } from '../../modules/experience/experience.module';
import { AboutComponent } from '../about/about.component';
import { ImpressumComponent } from '../impressum/impressum.component';
import { BirthcriteriaComponent } from '../birthcriteria/birthcriteria.component';
import { ContactComponent } from '../contact/contact.component';
import { FilterComponent } from '../../modules/birthplace/components/filter/filter.component';

import { environment } from '../../../environments/environment'
import { AuthService } from '../../modules/login/services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { SignupGeburtshausComponent } from '../signup-geburtshaus/signup-geburtshaus.component';
import { SignupSpitalComponent } from '../signup-spital/signup-spital.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent,
        SignupComponent,
        BirthplacesComponent,
        BirthplacesMapComponent,
        SearchComponent,
        BirthplacesListComponent,
        BirthplaceDetailsComponent,
        FilterComponent,
        AboutComponent,
        ImpressumComponent,
        SignupGeburtshausComponent,
        SignupSpitalComponent,
        BirthcriteriaComponent,
        ContactComponent,
        LoginComponent],
      providers: [AngularFireAuth,AuthService, { provide: APP_BASE_HREF, useValue: '/' }],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule,
        OwlModule,
        ToastrModule.forRoot({
          positionClass: 'toast-top-full-width',
          autoDismiss: false,
          disableTimeOut: true,
          closeButton: true
        }),
        ExperienceModule,
        DateTimePickerModule,
        AgmCoreModule.forRoot({
          apiKey: environment.googleMapsKey
        }),
        FormsModule
      ]
    })
      .compileComponents();
    location = TestBed.get(Location);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
