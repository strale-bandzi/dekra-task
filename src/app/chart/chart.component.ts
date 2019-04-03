import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chartLine = [];

  /*
   * static data: bears population in Serbia
   */

  bears: any = {
      month: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      population: [12, 17, 19, 16, 15, 19],
      label: 'Number of Bears in Serbia - past 6 months'
};



  constructor() { }

  ngOnInit() {
    this.chartLine = new Chart('chart-table', {
      type: 'line',
      data: {
          labels: this.bears.month,
          datasets: [{
              label: this.bears.label,
              data: this.bears.population,
              borderColor: [
                  'rgb(18, 151, 147)'
              ],
              fill: false,
              borderWidth: 3
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

}
