import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-user-experience-list',
  templateUrl: './user-experience-list.component.html',
  styleUrls: ['./user-experience-list.component.scss']
})
export class UserExperienceListComponent implements OnInit {

  experienceList;

  constructor( private af: AngularFireAuth, private experienceService: ExperienceService  ) { }

  ngOnInit() {
    /*let userId = this.authService.currentUserId;
    console.log("userexperience " + userId);
*/
  this.af.auth.onAuthStateChanged(
      currentUser => 
    this.experienceService.getExperiencesByUserId(currentUser.uid).subscribe(
      x => this.experienceList = x
    ));
    

  }

}
