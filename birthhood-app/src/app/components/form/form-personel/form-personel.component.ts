import { Component, OnInit } from '@angular/core';

import { Personel } from '../../../models/form-data';
import { FormDataService } from '../../../services/form-data.service';

@Component({
  selector: 'app-form-personel',
  templateUrl: './form-personel.component.html',
  styleUrls: ['./form-personel.component.scss']
})
export class FormPersonelComponent implements OnInit {

  title = 'Personel Formular Titel';
  personel: Personel;
  form: any;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.personel = this.formDataService.getPersonel();

    console.log('Form Personal loaded');

  }

  save(form: any) {
    if(!form.valid) 
      return;

      console.log('save form success');
      this.formDataService.setPersonel(this.personel);
   
  }

}
