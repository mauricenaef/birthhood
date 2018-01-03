import { Component, OnInit } from '@angular/core';
import { Koerperlich } from '../../models/experience-form-data';
import { ExperienceFormDataService } from '../../services/experience-form-data.service';

@Component({
  selector: 'app-experience-add-koerperlich',
  templateUrl: './experience-add-koerperlich.component.html',
  styleUrls: ['./experience-add-koerperlich.component.scss']
})
export class ExperienceAddKoerperlichComponent implements OnInit {

  title: string = 'Beurteilen Sie die Körperliche .. während der Geburt';
  koerperlich: Koerperlich;
  form: any;

  constructor(private formDataService: ExperienceFormDataService) { }

  ngOnInit() {
    this.koerperlich = this.formDataService.getKoerperlich();
  }

  save(form: any) {
    if (!form.valid)
      return;
    this.formDataService.setKoerperlich(this.koerperlich);
  }

}
