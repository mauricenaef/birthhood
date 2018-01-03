import { Component, OnInit } from '@angular/core';
import { Koerperlich } from '../../models/experience-form-data';
import { FormDataService } from '../../services/experience-form-data.service';

@Component({
  selector: 'app-experience-add-koerperlich',
  templateUrl: './experience-add-koerperlich.component.html',
  styleUrls: ['./experience-add-koerperlich.component.scss']
})
export class ExperienceAddKoerperlichComponent implements OnInit {

  title = 'Beurteilen Sie die Körperliche .. während der Geburt';
  koerperlich: Koerperlich;
  form: any;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.koerperlich = this.formDataService.getKoerperlich();
    console.log('Form Körperlich loaded');
  }

  save(form: any) {
    if (!form.valid)
      return;
    console.log('save form success');
    this.formDataService.setKoerperlich(this.koerperlich);
  }

}
