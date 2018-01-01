import { Component, OnInit } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';

import 'rxjs/add/operator/distinctUntilChanged';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchresults: Observable<any>;
  isActive: boolean = false;
  private searchTerms = new BehaviorSubject<string>(null);

  constructor(private birthplaceService: BirthplaceService,
    private router: Router) { }

  ngOnInit() {

    this.searchresults = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term =>
        term ? this.birthplaceService.search(term)
          : Observable.of<string[]>([])
      )
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<any>([]);
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  activateSearch(){
    this.isActive = true;
  }

  deactivateSearch(){
    this.isActive = false;
  }

}
