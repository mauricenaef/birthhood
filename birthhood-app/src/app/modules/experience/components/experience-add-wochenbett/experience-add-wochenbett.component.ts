import { Component, OnInit } from '@angular/core';
import { Wochenbett } from '../../models/form-data';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-experience-add-wochenbett',
  templateUrl: './experience-add-wochenbett.component.html',
  styleUrls: ['./experience-add-wochenbett.component.scss']
})
export class ExperienceAddWochenbettComponent implements OnInit {

  title = 'Beurteilen Sie das Wochenbett nach der Geburt';
  wochenbett: Wochenbett;
  form: any;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.wochenbett = this.formDataService.getWochenbett();
    console.log('Form Wochenbett loaded');
  }

  save(form: any) {
    if (!form.valid)
      return;
    console.log('save form success');
    this.formDataService.setWochenbett(this.wochenbett);
    this.formDataService.saveToFirebase();
  }

}
