import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  providers: [
    provideEcharts(),
  ]
})
export class ChartComponent implements OnInit {

  chartOptions: any;

  ngOnInit(): void {
    this.chartOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          },
          lineStyle: {
            color: '#000',
            width: 2,
            type: 'solid'
          },
        },
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        textStyle: {
          color: '#fff'
        },
        formatter: (params: any) => {
          let value = params[0].value[1];
          let percentage = (value / 500 * 100).toFixed(1);
          return `${params[0].name} : ${value} استخدام (${percentage}%)\nHello`;
        }
      },
      xAxis: {
        type: 'category',
        data: ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            ['December', 150],
            ['January', 330],
            ['February', 100],
            ['March', 290],
            ['April', 200],
            ['May', 290],
            ['June', 450],
            ['July', 270],
            ['August', 400],
            ['September', 200],
            ['October', 80],
            ['November', 280]
          ],
          type: 'line',
          smooth: true,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(0, 0, 180, 0.4)' },
                { offset: 1, color: 'rgba(0, 0, 180, 0)' }
              ]
            }
          },
          lineStyle: {
            color: 'rgba(0, 0, 180, 1)',
            width: 3
          },
          itemStyle: {
            color: 'rgba(0, 0, 180, 1)'
          },
        }
      ]
    };
  }
}