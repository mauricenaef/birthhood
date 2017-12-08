import { Component, OnInit } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';

@Component({
  selector: 'app-birthplaces-detail',
  templateUrl: './birthplaces-detail.component.html',
  styleUrls: ['./birthplaces-detail.component.scss']
})
export class BirthplacesDetailComponent implements OnInit {
  birthplace;

  constructor(private birthplaceService: BirthplaceService) { 

  }

  ngOnInit() {
    //debugger;
    this.birthplaceService.getBirthplace("0kuLVvy4bq7xJuBM1DlN").
    subscribe(x => {
      console.log(x);
      this.birthplace = x;
      
    });
  }

}
