import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../../services/experience-form-data.service';

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.scss']
})
export class ExperienceAddComponent implements OnInit {

  title: string = 'Add new Birth Experience';

  @Input() formData;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.formData = this.formDataService.getExperience();
  }

}
