import { Component, OnInit } from '@angular/core';
import { Wochenbett } from '../../models/form-data';
import { FormDataService } from '../../services/form-data.service';
import { ToastrService } from 'ngx-toastr';

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
    private formDataService: FormDataService,
    private toastr: ToastrService
  ) { }

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
    this.toastr.success('Form has been submited sucessfully', 'Write to Firebase' );
  }

}
