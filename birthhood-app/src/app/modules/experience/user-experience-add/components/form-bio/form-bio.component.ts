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


  public moment: Date = new Date();

  //public min = new Date(2017, 7, 9);
  //public max = Date.now();
  //public disabledDates = [new Date(2017, 7, 9),
  //new Date(2017, 7, 12), new Date(2017, 7, 15), new Date(2017, 7, 20)];

  public pickerColor: string = '#0070ba';

  public de = {
    firstDayOfWeek: 0,
    dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
  };

  public birth_date: any;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.bio = this.formDataService.getBio();

    console.log('Form Bio loaded');

  }

  save(form: any) {
    if (!form.valid)
      return;

    console.log('save form success');
    this.formDataService.setBio(this.bio);

  }

}
