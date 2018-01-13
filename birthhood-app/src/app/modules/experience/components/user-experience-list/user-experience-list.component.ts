import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';

import { Router } from '@angular/router';
import { Experience } from '../../models/experience-form-data';
import { AuthService } from '../../../login/services/auth.service';

@Component({
  selector: 'app-user-experience-list',
  templateUrl: './user-experience-list.component.html',
  styleUrls: ['./user-experience-list.component.scss']
})
export class UserExperienceListComponent implements OnInit {

  experienceList: Experience[];

  constructor(
    private authService: AuthService,
    private experienceService: ExperienceService,
    private router: Router) { }

  ngOnInit() {

    this.authService.af.auth.onAuthStateChanged(
      currentUser => {
        if (currentUser) {
          this.experienceService.getExperiencesByUserId(currentUser.uid)
            .subscribe(experienceList => {
              let returnExperiences: Experience[] = [];
              for (let experience of experienceList) {
                returnExperiences.push(new Experience(experience));
              }
              this.experienceList = returnExperiences;
            });
        }
      }
    );


  }

}
