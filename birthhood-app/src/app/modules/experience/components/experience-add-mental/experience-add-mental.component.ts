import { Component, OnInit } from '@angular/core';
import { Mental } from '../../models/experience-form-data';
import { ExperienceFormDataService } from '../../services/experience-form-data.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-experience-add-mental',
  templateUrl: './experience-add-mental.component.html',
  styleUrls: ['./experience-add-mental.component.scss']
})
export class ExperienceAddMentalComponent implements OnInit {

  title: string = 'Beurteilen Sie die Mental .. während der Geburt';
  mental: Mental;

  constructor(private formDataService: ExperienceFormDataService, private router: Router) { }

  ngOnInit() {
    this.mental = this.formDataService.getMental();
  }

  save(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.formDataService.setMental(this.mental);
    this.router.navigate(['/user-dashboard/experience/new/wochenbett'])
  }

}
