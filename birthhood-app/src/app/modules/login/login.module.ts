import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './../../app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  providers: [AuthService, AngularFireAuth]
})
export class LoginModule { }
