import { Component, OnInit } from '@angular/core';
import { Koerperlich } from '../../models/experience-form-data';
import { ExperienceFormDataService } from '../../services/experience-form-data.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-experience-add-koerperlich',
  templateUrl: './experience-add-koerperlich.component.html',
  styleUrls: ['./experience-add-koerperlich.component.scss']
})
export class ExperienceAddKoerperlichComponent implements OnInit {

  title: string = 'Beurteilen Sie die Körperliche .. während der Geburt';
  koerperlich: Koerperlich;

  constructor(private formDataService: ExperienceFormDataService, private router: Router) { }

  ngOnInit() {
    this.koerperlich = this.formDataService.getKoerperlich();
  }

  save(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    
    this.formDataService.setKoerperlich(this.koerperlich);
    this.router.navigate(['/user-dashboard/experience/new/mental'])
  }

}
