import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthplacesMapComponent } from './birthplaces-map.component';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule, } from 'angularfire2';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from '../../app-routing.module';
import { LoginComponent } from '../../components/login/login.component';
import { APP_BASE_HREF } from '@angular/common';
import { BirthplacesComponent } from '../../components/birthplaces/birthplaces.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { BirthplacesListComponent } from '../../components/birthplaces-list/birthplaces-list.component';
import { BirthplaceDetailsComponent } from '../../components/birthplace-details/birthplace-details.component';
import { SearchComponent } from '../../components/search/search.component';
import { UserExperienceListComponent } from '../../modules/experience/components/user-experience-list/user-experience-list.component';
import { UserDashboardComponent } from '../../modules/experience/components/user-dashboard/user-dashboard.component';
import { UserDashboardSidebarComponent } from '../../modules/experience/components/user-dashboard-sidebar/user-dashboard-sidebar.component';
import { ExperienceAddBioComponent } from '../../modules/experience/components/experience-add-bio/experience-add-bio.component';
import { ExperienceAddNavbarComponent } from '../../modules/experience/components/experience-add-navbar/experience-add-navbar.component';
import { ExperienceAddUmgebungComponent } from '../../modules/experience/components/experience-add-umgebung/experience-add-umgebung.component';
import { ExperienceAddComponent } from '../../modules/experience/components/experience-add/experience-add.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import { OwlModule } from 'ngx-owl-carousel';

import { DateTimePickerModule } from 'ng-pick-datetime';
import { BirthplaceService } from '../../services/birthplace.service';

const environment = {
  firebase: {
    apiKey: "AIzaSyBo-NplVsfsCeD_m_kZ_6Y8BzNnVKTHbIo",
    authDomain: "birthhood.firebaseapp.com",
    databaseURL: "https://birthhood.firebaseio.com",
    projectId: "birthhood",
    storageBucket: "birthhood.appspot.com",
    messagingSenderId: "986661546141"
  }
};

describe('BirthplacesMapComponent', () => {
  let component: BirthplacesMapComponent;
  let fixture: ComponentFixture<BirthplacesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BirthplacesMapComponent,
        SignupComponent,
        BirthplacesComponent,
        SearchComponent,
        UserExperienceListComponent,
        UserDashboardComponent,
        UserDashboardSidebarComponent,
        BirthplacesListComponent,
        BirthplaceDetailsComponent,
        ExperienceAddBioComponent,
        ExperienceAddNavbarComponent,
        ExperienceAddUmgebungComponent,
        ExperienceAddComponent,
        LoginComponent],
      providers: [
        AngularFireAuth,
        { provide: APP_BASE_HREF, useValue: '/' },
        BirthplaceService
        ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AppRoutingModule,
        OwlModule,
        DateTimePickerModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDnyvyYQD2Kf70Qkxbmk0Q6RFBw-FKCJbU'
        }),
        FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthplacesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
