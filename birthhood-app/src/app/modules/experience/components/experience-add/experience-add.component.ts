import { Component, OnInit, Input } from '@angular/core';
import { ExperienceFormDataService } from '../../services/experience-form-data.service';

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.scss']
})
export class ExperienceAddComponent implements OnInit {

  @Input() formData;

  constructor(private formDataService: ExperienceFormDataService) { }

  ngOnInit() {
    this.formData = this.formDataService.getExperience();
  }

}
