import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service'
@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  providers: [ExperienceService],
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {


  constructor(private service: ExperienceService ) { }

  ngOnInit() {
  }

  addExperience(){

    this.service.addExperience();

  }

}
