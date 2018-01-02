import { Component, OnInit } from '@angular/core';
import { Mental } from '../../models/form-data';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-experience-add-mental',
  templateUrl: './experience-add-mental.component.html',
  styleUrls: ['./experience-add-mental.component.scss']
})
export class ExperienceAddMentalComponent implements OnInit {

  title = 'Beurteilen Sie die Mental .. während der Geburt';
  mental: Mental;
  form: any;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.mental = this.formDataService.getMental();
    console.log('Form Mental loaded');
  }

  save(form: any) {
    if (!form.valid)
      return;
    console.log('save form success');
    this.formDataService.setMental(this.mental);
  }

}
