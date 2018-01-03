import { Component, OnInit, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { BirthplaceService } from '../../services/birthplace.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Chart } from 'chart.js';
import { Birthplace } from '../../models/birthplace';

@Component({
  selector: 'app-birthplace-details',
  templateUrl: './birthplace-details.component.html',
  styleUrls: ['./birthplace-details.component.scss']
})
export class BirthplaceDetailsComponent implements OnInit, OnDestroy, AfterViewInit {

  subscription: Subscription;
  birthplace: Birthplace;
  id: string;
  myChart: any;

  constructor(private birthplaceService: BirthplaceService, private elementRef: ElementRef,
    private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.birthplaceService.zoomToBirthplace(this.id);
      this.birthplaceService.getBirthplace(this.id).
        subscribe(x => {
          this.birthplace = x;
        });
    });
  }

  ngAfterViewInit() {

    let htmlRef = document.getElementById('myChart')
    this.myChart = new Chart(htmlRef, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
          },
          {
            label: "My Second dataset",
            fill: false,
            lineTension: 0.3,
            backgroundColor: "rgba(169,68,66,0.98)",
            borderColor: "rgba(169,68,66,0.98)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(169,68,66,0.98)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(169,68,66,0.98)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [60, 79, 90, 61, 76, 56, 80],
            spanGaps: false,
          }
        ]
      }
    })

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
