import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { stringFromHex } from '../../shared/helper';
import { PoolsService } from '../../shared/pools/pools.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-polls-result',
  templateUrl: './polls-result.component.html',
  styleUrls: ['./polls-result.component.scss']
})
export class PollsResultPageComponent {

  poll;
  chartType = 'pie';
  chartTypeIcon = 'show_chart';

  @ViewChild('chart') chart: ElementRef;

  constructor(private route: ActivatedRoute, private _poolService: PoolsService) {
    this.poll = JSON.parse(stringFromHex(this.route.snapshot.data.pool.stack[0].value[1].value));
  }

  print() {
    alert('cart');
    const openWindow = window.open("", "title", "attributes");
    openWindow.document.write(this.chart.nativeElement.innerHTML);
    openWindow.document.close();
    openWindow.focus();
    openWindow.print();
    openWindow.close();
  }

  goBack() {
    history.back();
  }

  switchChartType() {
    this.chartType = this.chartType === 'pie' ? 'bar' : 'pie';
    this.chartTypeIcon = this.chartTypeIcon === 'pie_chart' ? 'show_chart' : 'pie_chart';
  }
}
