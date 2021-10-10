import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chartData = [
    {
      data: [330, 600, 260, 700,900,200,899],
      label: 'Nike'
    },
    {
      data: [120, 455, 100, 340],
      label: 'Adidas'
    },
    {
      data: [45, 67, 800, 500],
      label: 'New Balance'
    }
  ];

  chartLabels = [
    'January',
    'February',
    'March',
    'April'
  ];

  chartOptions = {
    responsive: true
  };
  constructor() { }


  ngOnInit(): void {
  }

}
