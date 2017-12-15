import { Component, OnInit, OnDestroy } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-birthplace-details',
  templateUrl: './birthplace-details.component.html',
  styleUrls: ['./birthplace-details.component.scss']
})
export class BirthplaceDetailsComponent implements OnInit, OnDestroy {
  
  subscription: Subscription;
  birthplace;
  id: string;

  constructor(private birthplaceService: BirthplaceService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.birthplaceService.zoomTo(this.id);
      this.birthplaceService.getBirthplace(this.id).
      subscribe(x => {
        this.birthplace = x;
      });
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
