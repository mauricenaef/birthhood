import { Component, OnInit } from '@angular/core';
import { Umgebung } from '../../models/experience-form-data';
import { FormDataService } from '../../services/experience-form-data.service';

@Component({
  selector: 'app-experience-add-umgebung',
  templateUrl: './experience-add-umgebung.component.html',
  styleUrls: ['./experience-add-umgebung.component.scss']
})
export class ExperienceAddUmgebungComponent implements OnInit {

  title : string = 'Beurteilen Sie die Umgebung während der Geburt';
  umgebung: Umgebung;
  form: any;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.umgebung = this.formDataService.getUmgebung();
  }

  save(form: any) {
    if (!form.valid)
      return;
    this.formDataService.setUmgebung(this.umgebung);
  }

}
