import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {

  constructor(public af: AngularFireAuth, private router: Router, private toastr: ToastrService) { 
    
  }

  signOut() {
    this.af.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
    this.toastr.success(`${this.af.auth.currentUser.email} abgemeldet`, "Logout");
  }
  
}
