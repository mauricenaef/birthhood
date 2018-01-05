import { async, ComponentFixture, tick, fakeAsync, TestBed } from '@angular/core/testing';
import { Location } from "@angular/common";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule, } from 'angularfire2';
import { AngularFirestoreModule, } from 'angularfire2/firestore';
import { AppRoutingModule } from '../../app-routing.module';
import { LoginComponent } from '../../modules/login/components/login/login.component';
import { APP_BASE_HREF } from '@angular/common';
import { BirthplacesComponent } from '../../components/birthplaces/birthplaces.component';
import { SignupComponent } from '../../modules/login/components/signup/signup.component';
import { BirthplacesMapComponent } from '../../components/birthplaces-map/birthplaces-map.component';
import { BirthplacesListComponent } from '../../components/birthplaces-list/birthplaces-list.component';
import { BirthplaceDetailsComponent } from '../../components/birthplace-details/birthplace-details.component';
import { SearchComponent } from '../../components/search/search.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import { OwlModule } from 'ngx-owl-carousel';

import { DateTimePickerModule } from 'ng-pick-datetime';
import { FooterComponent } from './footer.component';
import { AboutComponent } from '../about/about.component';
import { BirthcriteriaComponent } from '../birthcriteria/birthcriteria.component';
import { ContactComponent } from '../contact/contact.component';
import { ImpressumComponent } from '../impressum/impressum.component';
import { SignupBirthplaceComponent } from '../signup-birthplace/signup-birthplace.component';
import { ExperienceModule } from '../../modules/experience/experience.module';
import { FilterComponent } from '../filter/filter.component';

import { environment } from '../../../environments/environment'


describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent,
        SignupComponent,
        BirthplacesComponent,
        BirthplacesMapComponent,
        SearchComponent,
        FilterComponent,
        BirthplacesListComponent,
        BirthplaceDetailsComponent,

        AboutComponent,
        SignupBirthplaceComponent,
        ImpressumComponent,
        BirthcriteriaComponent,
        ContactComponent,
        LoginComponent],
      providers: [AngularFireAuth, { provide: APP_BASE_HREF, useValue: '/' }],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule,
        ExperienceModule,
        OwlModule,
        DateTimePickerModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDnyvyYQD2Kf70Qkxbmk0Q6RFBw-FKCJbU'
        }),
        FormsModule
      ]
    })
      .compileComponents();
    location = TestBed.get(Location);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to main page upon logout', fakeAsync(() => {
    component.logout();
    tick();
    expect(location.path()).toBe('/birthplaces');
  }));
});
