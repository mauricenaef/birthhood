import { Component, OnInit, HostBinding} from '@angular/core';
import { fadeInAnimation } from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-birthcriteria',
  templateUrl: './birthcriteria.component.html',
  styleUrls: ['./birthcriteria.component.scss'],
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class BirthcriteriaComponent implements OnInit {
  @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
