import { Component, OnInit, Input } from '@angular/core';

import { FormDataService } from './services/form-data.service';

@Component({
  selector: 'app-user-experience-add',
  templateUrl: './user-experience-add.component.html',
  styleUrls: ['./user-experience-add.component.scss']
})
export class UserExperienceAddComponent implements OnInit {

  title = 'Add new Birth Experience';

  @Input() formData;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    console.log(this.title + ' loaded');
  }

}
