import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';
import { Experience } from '../../models/experience-form-data';

@Component({
  selector: 'app-user-experience-list',
  templateUrl: './user-experience-list.component.html',
  styleUrls: ['./user-experience-list.component.scss']
})
export class UserExperienceListComponent implements OnInit {

  experienceList: Experience[];

  constructor(
    private af: AngularFireAuth, 
    private experienceService: ExperienceService, 
    private router: Router) { }

  ngOnInit() {

    this.af.auth.onAuthStateChanged(
      currentUser => {
        if (currentUser) {
          this.experienceService.getExperiencesByUserId(currentUser.uid)
          .subscribe( experienceList => {
            let returnExperiences: Experience[] = [];
            for (let experience of experienceList) {
              returnExperiences.push(new Experience(experience));
            }
            console.log(returnExperiences);
            this.experienceList = returnExperiences;
          });
        } else {
          //ev. gar nicht nötig, da über ROuteGuard gekapselt wird
          this.router.navigateByUrl('/');
        }
      }
    );


  }

}
