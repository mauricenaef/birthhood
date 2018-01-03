import { Component, OnInit } from '@angular/core';
import { Emotional } from '../../models/experience-form-data';
import { ExperienceFormDataService } from '../../services/experience-form-data.service';

@Component({
  selector: 'app-experience-add-emotional',
  templateUrl: './experience-add-emotional.component.html',
  styleUrls: ['./experience-add-emotional.component.scss']
})
export class ExperienceAddEmotionalComponent implements OnInit {

  title: string = 'Beurteilen Sie die Emotionalität während der Geburt';
  emotional: Emotional;
  form: any;

  constructor(private formDataService: ExperienceFormDataService) { }

  ngOnInit() {
    this.emotional = this.formDataService.getEmotional();
  }

  save(form: any) {
    if (!form.valid)
      return;
    this.formDataService.setEmotional(this.emotional);
  }

}
