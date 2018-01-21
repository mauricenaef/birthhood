import { async, ComponentFixture, tick, fakeAsync, TestBed } from '@angular/core/testing';
import { Location } from "@angular/common";
import { AppRoutingModule } from '../../app-routing.module';
import { BirthplaceModule } from '../../modules/birthplace/birthplace.module';
import { LoginModule } from '../../modules/login/login.module';
import { ExperienceModule } from '../../modules/experience/experience.module';

import { APP_BASE_HREF } from '@angular/common';
import * as firebase from 'firebase/app';

import { FooterComponent } from './footer.component';
import { AboutComponent } from '../about/about.component';
import { BirthcriteriaComponent } from '../birthcriteria/birthcriteria.component';
import { ContactComponent } from '../contact/contact.component';
import { ImpressumComponent } from '../impressum/impressum.component';

import { environment } from '../../../environments/environment'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { ToastrModule } from 'ngx-toastr';
import { AuthService } from '../../modules/login/services/auth.service';
import { SignupGeburtshausComponent } from '../signup-geburtshaus/signup-geburtshaus.component';
import { SignupSpitalComponent } from '../signup-spital/signup-spital.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent,
        AboutComponent,
        ImpressumComponent,
        SignupGeburtshausComponent,
        SignupSpitalComponent,
        BirthcriteriaComponent,
        ContactComponent],
      providers: [ AuthService, { provide: APP_BASE_HREF, useValue: '/' }],
      imports: [
        AppRoutingModule,
        ExperienceModule,
        LoginModule,
        BirthplaceModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        ToastrModule.forRoot({
          positionClass: 'toast-top-full-width',
          autoDismiss: false,
          disableTimeOut: true,
          closeButton: true
        })
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
  
});
