import { Component, OnInit } from '@angular/core';

import { Bio } from '../../models/form-data';
import { FormDataService } from '../../services/form-data.service';
import { BirthplaceService } from '../../../../services/birthplace.service';

@Component({
  selector: 'app-experience-add-bio',
  templateUrl: './experience-add-bio.component.html',
  styleUrls: ['./experience-add-bio.component.scss']
})
export class ExperienceAddBioComponent implements OnInit {

  title = 'Bio Formular Titel';
  bio: Bio;
  form: any;
  birthplacelist;

  public moment: Date = new Date();
  public pickerColor: string = '#0070ba';
  public de = {
    firstDayOfWeek: 0,
    dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
  };
  public birth_date: any;

  constructor(private formDataService: FormDataService, private birthPlaceService: BirthplaceService) { }

  ngOnInit() {
    
    this.birthPlaceService.getBirthplaces().subscribe( x => { 
      this.birthplacelist = x;
      //console.log(x);
    });

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
