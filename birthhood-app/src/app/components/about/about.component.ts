import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class AboutComponent implements OnInit {
  @HostBinding('style.display') display = 'block';
  constructor() { }

  ngOnInit() {
  }

}
