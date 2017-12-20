import { Component, OnInit } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Observable } from 'rxjs/Observable';
import { BirthplaceFilter } from '../../models/birthplace-filter';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filter: BirthplaceFilter;

  constructor(private birthplaceService: BirthplaceService) {
    this.filter = new BirthplaceFilter();
    this.filter.spital = true;
    this.filter.geburtshaus = false;

  }

  ngOnInit() {
    this.updateFilter();
  }


  updateFilter() {
    console.log("updateFilterin Component");
    //noch nötig?
    this.birthplaceService.updateFilter(this.filter);
  }
}

