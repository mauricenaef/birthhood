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
    this.filter.showHospitals = true;
    this.filter.showHouses = true;
    this.updateFilter();
  }

  ngOnInit() {
  }


  updateFilter() {
    console.log("updateFilter");
    this.birthplaceService.updateFilter(this.filter);
  }
}

