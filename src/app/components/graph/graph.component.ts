import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  // documentation of linechart can be found on: http://www.chartjs.org/
  public linechartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // TODO this needs to be filled with the data provided by the NoSi Data is too generic, for importing the table
  // the data should be retrieved by MongoDB
  public linechartData: number[] = [40, 50, 20, 40, 20, 40, 50];

  public linechartLegend: Boolean = false;

  // Type of linechart, different types can be found: http://www.chartjs.org/
  public linechartType: String = 'line';

  public lineChartOptions: any = {
    responsive: true
  };

  // colors that you can give to the linechart
  public linechartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  // events after click can be defined
  public chartClicked(e: any): void {
  }

 public chartHovered(e: any): void {
  }


  constructor() { }

  ngOnInit() {
    }
}
