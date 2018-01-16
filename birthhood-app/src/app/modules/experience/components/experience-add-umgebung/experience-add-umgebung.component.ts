import { Component, OnInit } from '@angular/core';
import { Umgebung } from '../../models/experience-form-data';
import { ExperienceFormDataService } from '../../services/experience-form-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-experience-add-umgebung',
  templateUrl: './experience-add-umgebung.component.html',
  styleUrls: ['./experience-add-umgebung.component.scss']
})
export class ExperienceAddUmgebungComponent implements OnInit {

  title: string = 'Beurteilen Sie die Umgebung während der Geburt';
  umgebung: Umgebung;
  form: any;

  constructor(private formDataService: ExperienceFormDataService, private router: Router) { }

  ngOnInit() {
    this.umgebung = this.formDataService.getUmgebung();
  }

  save(form: any) {
    if (!form.valid) {
      return;
    }
    
    this.formDataService.setUmgebung(this.umgebung);
    this.router.navigate(['/user-dashboard/experience/new/emotional'])
  }

}
