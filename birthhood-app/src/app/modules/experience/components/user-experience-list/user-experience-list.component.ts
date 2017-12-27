import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-user-experience-list',
  templateUrl: './user-experience-list.component.html',
  styleUrls: ['./user-experience-list.component.scss']
})
export class UserExperienceListComponent implements OnInit {

  experienceList;

  constructor( private authService: AuthService, private experienceService: ExperienceService  ) { }

  ngOnInit() {
    /*let userId = this.authService.currentUserId;
    console.log("userexperience " + userId);
*/
    this.authService.currentUserObservable.subscribe(
      currentUser => 
    this.experienceService.getExperiencesByUserId(currentUser.uid).subscribe(
      x => this.experienceList = x
    ));
    

  }

}
