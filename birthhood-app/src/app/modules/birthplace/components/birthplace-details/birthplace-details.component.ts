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
  }

  ngAfterViewInit() {

    let body = document.getElementsByTagName('body')[0];
    setTimeout( _=> body.classList.add("is-detail"), 1000);

    this.birthplace$.subscribe(birthplace => {
      this.birthplace = new Birthplace(birthplace);

      let htmlRef = document.getElementById('myChart')
      this.myChart = new Chart(htmlRef, {
        type: 'polarArea',
        options: {
          responsive: true,
          legend: {
            position: 'bottom',
          },
          scale: {
            ticks: {
              backdropPaddingX: 5,
              backdropPaddingY: 5,
              max: 3,
              backdropColor: 'rgba(0, 0, 0, 0)',
              major: {
                fontSize: 22,
              }
            }
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        },

        data: {
          datasets: [{
            data: [
              this.birthplace.score_e_rounded,
              this.birthplace.score_k_rounded,
              this.birthplace.score_m_rounded,
              this.birthplace.score_u_rounded,
              this.birthplace.score_w_rounded
            ],
            backgroundColor: [
              "rgba(76, 99, 90, 1)",
              "rgba(102, 132, 120, 1)",
              "rgba(139, 181, 164, 1)",
              "rgba(181, 207, 197, 1)",
              "rgba(202, 221, 213, 1)",
            ],
            borderWidth: 0,
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

    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
