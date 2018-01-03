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
            responsive: true,
            legend: {
                position: 'bottom',
            },
            animation: {
              animateScale: true,
              animateRotate: false
            }
          },
          type: 'polarArea',
          data: {
            datasets: [{
              data: [
                birthplace.score_e_rounded,
                birthplace.score_k_rounded,
                birthplace.score_m_rounded,
                birthplace.score_u_rounded,
                birthplace.score_w_rounded
              ],
              backgroundColor: [
                "rgba(76, 99, 90, 1)",
                "rgba(102, 132, 120, 1)",
                "rgba(139, 181, 164, 1)",
                "rgba(181, 207, 197, 1)",
                "rgba(202, 221, 213, 1)",
              ]
            }],
            borderWidth: [
              0
            ],
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
