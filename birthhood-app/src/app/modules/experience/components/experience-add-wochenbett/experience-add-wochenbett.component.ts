import { Component, OnInit } from '@angular/core';
import { Wochenbett } from '../../models/experience-form-data';
import { ToastrService } from 'ngx-toastr';
import { ExperienceFormDataService } from '../../services/experience-form-data.service';

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
    private toastr: ToastrService
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
        this.toastr.success('Form has been submited successfully', 'Write to Firebase');
        //redirect to Experiences List
        //this.router.navigate(['./user-dashboard']);
      }
    ).catch( error => {
      this.toastr.success(`Eintrag konnte nicht geschrieben werden: ${error}`, 'Fehler');
    }
    );
  }
}
