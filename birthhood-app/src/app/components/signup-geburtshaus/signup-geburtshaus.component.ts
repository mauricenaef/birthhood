import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-signup-geburtshaus',
  templateUrl: './signup-geburtshaus.component.html',
  styleUrls: ['./signup-geburtshaus.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class SignupGeburtshausComponent implements OnInit {
  @HostBinding('style.display') display = 'block';
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
