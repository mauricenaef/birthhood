import { Component, OnInit, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Chart } from 'chart.js';
import { Birthplace } from '../../models/birthplace';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-birthplace-details',
  templateUrl: './birthplace-details.component.html',
  styleUrls: ['./birthplace-details.component.scss']
})
export class BirthplaceDetailsComponent implements OnInit, OnDestroy, AfterViewInit {

  subscription: Subscription;
  birthplace: Birthplace;
  birthplace$: Observable<Birthplace>;
  id: string;
  myChart: any;

  constructor(private birthplaceService: BirthplaceService, private elementRef: ElementRef,
    private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.birthplaceService.zoomToBirthplace(this.id);
      this.birthplace$ = this.birthplaceService.getBirthplace(this.id);
    });

    this.birthplace$.subscribe(birthplace => {
      this.birthplace = new Birthplace( birthplace );
    });
  }

  ngAfterViewInit() {


    this.birthplace$.subscribe(
      birthplace => {
        let htmlRef = document.getElementById('myChart')
        this.myChart = new Chart(htmlRef, {
          options: {
            animation: {
              animateScale: true,
              animateRotate: false
            }
          },
          type: 'polarArea',
          data: {
            datasets: [{
              data: [
                birthplace.score_e,
                birthplace.score_k,
                birthplace.score_m,
                birthplace.score_u,
                birthplace.score_w
              ],
              backgroundColor: [
                "rgba(255, 255, 0, 1)",
                "rgba(0, 255, 0, 1)",
                "rgba(0, 220, 255, 1)",
                "rgba(255, 0, 255, 1)",
                "rgba(0, 0, 255, 1)",

              ]
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
              'Emotional',
              'Körperlich',
              'Mental',
              'Umfeld',
              'Wochenbett'
            ]
          }
        })
      }
    )



  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
