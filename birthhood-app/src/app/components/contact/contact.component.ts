import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class ContactComponent implements OnInit {
  @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
