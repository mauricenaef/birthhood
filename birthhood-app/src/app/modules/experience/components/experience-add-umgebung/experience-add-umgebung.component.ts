import { Component, OnInit } from '@angular/core';
import { Umgebung } from '../../models/form-data';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-experience-add-umgebung',
  templateUrl: './experience-add-umgebung.component.html',
  styleUrls: ['./experience-add-umgebung.component.scss']
})
export class ExperienceAddUmgebungComponent implements OnInit {

  title = 'Beurteilen Sie die Umgebung während der Geburt';
  umgebung: Umgebung;
  form: any;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.umgebung = this.formDataService.getUmgebung();
    console.log('Form Umgebung loaded');
  }

  save(form: any) {
    if (!form.valid)
      return;
    console.log('save form success');
    this.formDataService.setUmgebung(this.umgebung);
    this.formDataService.saveToFirebase();
  }

}
