import { Component, OnInit } from '@angular/core';
import { MultiDataSet } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{

  public data1 = [
    [20, 32, 100]
  ];
  public labels1: string[] = ['Sales 1', 'Sales 2', 'Sales 3'];
  public colors1: string[] = ['#9E180E', '#FF5900', '#FFB314'];
  public title: string = 'Venta 1';
}
