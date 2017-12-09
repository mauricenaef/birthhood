import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Subscription }   from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { Subscribable } from 'rxjs/Observable';

@Component({
  selector: 'app-birthplaces-list',
  templateUrl: './birthplaces-list.component.html',
  styleUrls: ['./birthplaces-list.component.scss']
})
export class BirthplacesListComponent implements OnInit, OnDestroy {

  birthplaces;
  subscription: Subscription;

  constructor(private birthplaceService: BirthplaceService) {

  }

  ngOnInit() {
    this.subscription = this.birthplaceService.getBirthplaces().subscribe(
      x => {
        this.birthplaces = x;
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
