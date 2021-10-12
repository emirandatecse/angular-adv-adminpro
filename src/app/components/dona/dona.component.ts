import { Component, Input, Output } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts'

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{
 
  @Input() title: string = 'Sin Titulo';
  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data')  doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors:Color[] = [
    { backgroundColor: ['#9E120E', '#FF5800', '#FFB414'] }
  ]

/*
@Input('labels') labels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
@Input('data') data: MultiDataSet = [
  [350, 450, 100]
];
public doughnutChartType: ChartType = 'doughnut';
@Input('colors') colors:Color[] = [
  { backgroundColor: ['#9E120E', '#FF5800', '#FFB414'] }
]
*/
}
