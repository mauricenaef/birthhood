import { Component, OnInit } from '@angular/core';

import { Umfeld } from '../../models/form-data';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-form-umfeld',
  templateUrl: './form-umfeld.component.html',
  styleUrls: ['./form-umfeld.component.scss']
})
export class FormUmfeldComponent implements OnInit {

  title = 'Umfeld Formular Titel';
  umfeld: Umfeld;
  form: any;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.umfeld = this.formDataService.getUmfeld();

    console.log('Form Umfeld loaded');

  }

  save(form: any) {
    if (!form.valid)
      return;

    console.log('save form success');
    this.formDataService.setUmfeld(this.umfeld);

  }

}
