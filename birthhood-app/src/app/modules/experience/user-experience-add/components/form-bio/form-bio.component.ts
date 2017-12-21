import { Component, OnInit } from '@angular/core';

import { Bio } from '../../models/form-data';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-form-bio',
  templateUrl: './form-bio.component.html',
  styleUrls: ['./form-bio.component.scss']
})
export class FormBioComponent implements OnInit {

  title = 'Bio Formular Titel';
  bio: Bio;
  form: any;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.bio = this.formDataService.getBio();

    console.log('Form Bio loaded');

  }

  save(form: any) {
    if(!form.valid) 
      return;

      console.log('save form success');
      this.formDataService.setBio(this.bio);
   
  }

}
