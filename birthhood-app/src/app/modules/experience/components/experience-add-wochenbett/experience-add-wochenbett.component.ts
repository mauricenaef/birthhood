import { Component, OnInit } from '@angular/core';
import { Wochenbett } from '../../models/experience-form-data';
import { ToastrService } from 'ngx-toastr';
import { ExperienceFormDataService } from '../../services/experience-form-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-add-wochenbett',
  templateUrl: './experience-add-wochenbett.component.html',
  styleUrls: ['./experience-add-wochenbett.component.scss']
})
export class ExperienceAddWochenbettComponent implements OnInit {

  title = 'Beurteilen Sie das Wochenbett nach der Geburt';
  wochenbett: Wochenbett;
  form: any;

  constructor(
    private formDataService: ExperienceFormDataService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.wochenbett = this.formDataService.getWochenbett();
  }

  save(form: any) {
    if (!form.valid)
      return;
    this.formDataService.setWochenbett(this.wochenbett);
    this.formDataService.saveToFirebase().then(
      docRef => {
        this.toastr.success('Ihre Bewertung wurde erfolgreich erfasst!', 'Vielen Dank für Ihre Angaben!');
        //redirect to Experiences List
        this.router.navigate(['./user-dashboard']);
      }
    ).catch( error => {
      this.toastr.success(`Eintrag konnte nicht geschrieben werden: ${error}`, 'Fehler');
    }
    );
  }
}
