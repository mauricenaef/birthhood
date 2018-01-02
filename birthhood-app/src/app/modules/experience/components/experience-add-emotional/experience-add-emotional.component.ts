import { Component, OnInit } from '@angular/core';
import { Emotional } from '../../models/form-data';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-experience-add-emotional',
  templateUrl: './experience-add-emotional.component.html',
  styleUrls: ['./experience-add-emotional.component.scss']
})
export class ExperienceAddEmotionalComponent implements OnInit {

  title = 'Beurteilen Sie die Emotionalität während der Geburt';
  emotional: Emotional;
  form: any;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.emotional = this.formDataService.getEmotional();
    console.log('Form Emotional loaded');
  }

  save(form: any) {
    if (!form.valid)
      return;
    console.log('save form success');
    this.formDataService.setEmotional(this.emotional);
  }

}
