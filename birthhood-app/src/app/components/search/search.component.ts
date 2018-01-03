import { Component, OnInit } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';

import 'rxjs/add/operator/distinctUntilChanged';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Birthplace } from '../../models/birthplace';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchresults: Observable<Birthplace[]>;
  isActive: boolean = false;
  filterIsVisible: boolean = false;

  private searchTerms: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private birthplaceService: BirthplaceService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit() {

    this.searchresults = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term =>
        term ? this.birthplaceService.search(term)
          : Observable.of<Birthplace[]>([])
      )
      .catch(error => {
        this.toastr.success(error, "Fehler bei Suche");
        return Observable.of<any>([]);
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  activateSearch(): void{
    this.isActive = true;
  }

  deactivateSearch(): void{
    this.isActive = false;
  }

  showFilter(): void {
    this.filterIsVisible = true;
  }
}
