import { Component, OnInit } from '@angular/core';
import { MultiDataSet } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public data1 = [ [20, 32, 100] ];
  public labels1: string[] = ['Sales 1', 'Sales 2', 'Sales 3'];
  public colors1: string[] = ['#9E180E', '#FF5900', '#FFB314'];
  public title1: string = 'Venta 1';

  public data2 = [ [120, 60, 70] ];
  public labels2: string[] = ['Sales V1', 'Sales V2', 'Sales V3'];
  public colors2: string[] = ['#9E480E', '#FF5800', '#FFB714'];
  public title2: string = 'Venta 2';
}
