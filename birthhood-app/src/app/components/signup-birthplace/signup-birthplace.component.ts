import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-birthplace',
  templateUrl: './signup-birthplace.component.html',
  styleUrls: ['./signup-birthplace.component.scss']
})
export class SignupBirthplaceComponent implements OnInit {

  //set Password to show default
  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    this.show = !this.show;
    if (this.show) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

}
