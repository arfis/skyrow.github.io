import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PoolsService } from '../../shared/pools/pools.service';

@Component({
  selector: 'app-poll-result',
  templateUrl: './poll-result.component.html',
  styleUrls: ['./poll-result.component.scss']
})
export class PollResultComponent implements OnInit, OnChanges {

  @Input() options;
  @Input() poll;
  @Input() chartType = 'pie';

  chartOptions;
  labels = [];
  dataset = [];

  results = {};
  data: any;

  constructor(private _pollsService: PoolsService) {
  }

  switchChartType() {

    this.chartType = this.chartType === 'pie' ? 'bar' : 'pie';
    this.setUpPie();
  }

  setUpPie() {
    if (this.chartType === 'pie') {
      this.chartOptions = {
        legend: {
          position: 'top'
        }
      };
    } else {
      this.chartOptions = {
        legend: {
          position: 'none'
        }
      };
    }
    this.data = {...this.data};
  }

  ngOnChanges(changes) {
    if (changes.chartType) {
      this.setUpPie();
    }
  }

  ngOnInit() {
    for (const option of this.options) {
      this._pollsService.getOptionResult(this.poll.id, option.id).subscribe(
        result => {
          this.labels.push(option.label);
          this.dataset.push(result.stack[0].value);

          this.data = {
            labels: this.labels,
            datasets: [
              {
                data: this.dataset,
                backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
                ],
                hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
                ]
              }]
          };
          this.chartOptions = {
            legend: {
              position: 'top'
            }
          },
          error => alert(error);
        });
    }
  }
}
