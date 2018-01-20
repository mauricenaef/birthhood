import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HostListener } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/combinelatest';
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
export class SearchComponent implements OnInit , OnDestroy{

  searchresults: Observable<Birthplace[]>;
  isActive: boolean = false;
  body: HTMLElement;

  @ViewChild('searchBox') searchBox;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == "Escape") this.deactivateSearch();
  }
  private searchTerms: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(public birthplaceService: BirthplaceService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.body = document.getElementsByTagName('body')[0];

  }

  ngOnDestroy() {
    this.body.classList.remove("overflow-hidden");
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  activateSearch(): void {
    document.body.scrollTop = 0;
    
    this.searchresults = Observable.combineLatest(this.searchTerms.debounceTime(300)
      .distinctUntilChanged(),
      this.birthplaceService.filterChanged$,
    ).switchMap(combined => {
      return combined[0] ? this.birthplaceService.search(combined[0]) : Observable.of<Birthplace[]>([]);
    })
      .catch(error => {
        this.toastr.error(error, "Fehler bei Suche");
        return Observable.of<Birthplace[]>([]);
      });

    this.body.classList.add("overflow-hidden");
    this.isActive = true;
    
  }

  deactivateSearch(): void {
    this.searchresults = null;
    this.body.classList.remove("overflow-hidden");
    this.searchBox.nativeElement.blur();
    this.isActive = false;
  }
}
