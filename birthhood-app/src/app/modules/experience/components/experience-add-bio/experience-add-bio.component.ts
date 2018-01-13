import { Component, OnInit } from '@angular/core';
import { Bio } from '../../models/experience-form-data';
import { ExperienceFormDataService } from '../../services/experience-form-data.service';
import { BirthplaceService } from '../../../birthplace/services/birthplace.service';
import { ToastrService } from 'ngx-toastr';
import { Birthplace } from '../../../birthplace/models/birthplace';
import { AuthService } from '../../../login/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-add-bio',
  templateUrl: './experience-add-bio.component.html',
  styleUrls: ['./experience-add-bio.component.scss']
}) 

export class ExperienceAddBioComponent implements OnInit {

  title: string = 'Generelle Angaben';
  bio: Bio;
  form: any;
  birthplacelist: Birthplace[];

  userLoggedIn: boolean = false;

  public moment: Date = new Date();
  public pickerColor: string = '#0070ba';
  public de = {
    firstDayOfWeek: 0,
    dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
  };
  public max: Date = new Date();
  public birth_date: any;

  constructor(
    private authService: AuthService,
    private formDataService: ExperienceFormDataService,
    private birthPlaceService: BirthplaceService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.authService.af.auth.onAuthStateChanged(user => this.userLoggedIn = user ? true : false);
  }

  ngOnInit() {
    this.birthPlaceService.getBirthplaces().subscribe(birthplaces => {
      this.birthplacelist = birthplaces;
    });
    this.bio = this.formDataService.getBio();
  }

  save(form: any) {
    if (!form.valid) {
      return;
    }
    // This saves the Birthplace Name based on ID
    this.bio.birthplace.name = this.birthplacelist.filter(x => x.id == this.bio.birthplace.id)[0].name;
    this.formDataService.setBio(this.bio);
    this.router.navigate(['./umgebung'])
  }

}
