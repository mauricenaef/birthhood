import { Component, OnInit } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';

@Component({
  selector: 'app-birthplaces-list',
  templateUrl: './birthplaces-list.component.html',
  styleUrls: ['./birthplaces-list.component.scss']
})
export class BirthplacesListComponent implements OnInit {

  birthplaces;

  constructor(private birthplaceService: BirthplaceService) {

  }

  ngOnInit() {
    this.birthplaceService.getBirthplaces().subscribe(
      x => this.birthplaces = x
      
      
    )
  }

}
