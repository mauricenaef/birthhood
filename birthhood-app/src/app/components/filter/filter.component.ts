import { Component, OnInit, Input } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Observable } from 'rxjs/Observable';
import { BirthplaceFilter } from '../../models/birthplace-filter';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  inputs: ['show-filter']
})
export class FilterComponent implements OnInit {

  filter: BirthplaceFilter;

  constructor(private birthplaceService: BirthplaceService, private toastr: ToastrService) {
    this.filter = new BirthplaceFilter();

    let tempdata = localStorage.getItem("birthhood_filtersettings");
    if (tempdata) {
      try {
        this.filter = JSON.parse(tempdata);
      } catch(e) {
        this.toastr.success(e, "Filter wurde zurürckgesetzt");
        this.filter.spital = true;
        this.filter.geburtshaus = true;
        localStorage.setItem("birthhood_filtersettings", JSON.stringify(this.filter));
      }
    } else {
      this.filter.spital = true;
      this.filter.geburtshaus = true;
    }

  }

  ngOnInit() {
    this.updateFilter();
  }


  updateFilter() {
    localStorage.setItem("birthhood_filtersettings", JSON.stringify(this.filter));
    this.birthplaceService.updateFilter(this.filter);
  }
}

