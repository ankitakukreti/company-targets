// import { Component, Input, Output, OnInit } from '@angular/core';
// import { ChartsModule } from 'ng2-charts/ng2-charts';

// import { TargetListService } from '../_services/targetList.service';

// import { Observable } from 'rxjs/Observable';

// var barChartLabels: string[];
// var barChartData: string[];

// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
// })
// export class ChartComponent implements OnInit {

//   targetList: Observable<any>;

//   public barChartOptions: any = {
//     scaleShowVerticalLines: false,
//     responsive: true
//   };
  
//   public barChartType: string = 'bar';
//   public barChartLegend: boolean = true;

//   constructor(private _targetList: TargetListService) {
//     barChartData = [];
//     barChartLabels = [];

//     this._targetList.getTheTargetList()
//       .subscribe((response) => {
//         this.targetList = response;
//         this.getChartData();
//         console.log(this.targetList); //<-- not undefined anymore
//       });
//     // this.targetList = this._targetList.getTheTargetList();
//   }

//   ngOnInit() {
//     this.getChartData();
//   }

//   //  [
//   //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
//   //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
//   // ];

//   // events
//   public chartClicked(e: any): void {
//     console.log(e);
//   }

//   public chartHovered(e: any): void {
//     console.log(e);
//   }

//   public getChartData() {
//     this.targetList.forEach((data: any) => {
//       console.log("list data: ", data)
//       barChartData.push(data.currentFinancialGrowth);
//       barChartLabels.push(data.companyInfo.name);

//     })

//   }

//   public randomize(): void {
//     // Only Change 3 values
//     let data = [
//       Math.round(Math.random() * 100),
//       59,
//       80,
//       (Math.random() * 100),
//       56,
//       (Math.random() * 100),
//       40];
//     let clone = JSON.parse(JSON.stringify(this.barChartData));
//     clone[0].data = data;
//     this.barChartData = clone;
//     /**
//      * (My guess), for Angular to recognize the change in the dataset
//      * it has to change the dataset variable directly,
//      * so one way around it, is to clone the data, change it and then
//      * assign it;
//      */
//   }
// }
