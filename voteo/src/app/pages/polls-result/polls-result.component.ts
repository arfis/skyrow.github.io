import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { stringFromHex } from '../../shared/core/helper';
import { PoolsService } from '../../shared/pools/pools.service';
import { ActivatedRoute } from '@angular/router';
import 'jspdf';
declare let jsPDF;

@Component({
  selector: 'app-polls-result',
  templateUrl: './polls-result.component.html',
  styleUrls: ['./polls-result.component.scss']
})
export class PollsResultPageComponent implements OnInit {

  poll;
  chartType = 'pie';
  chartTypeIcon = 'show_chart';

  @ViewChild('chart') chart: ElementRef;

  constructor(private route: ActivatedRoute,
              private elementRef: ElementRef) {
    this.poll = JSON.parse(stringFromHex(this.route.snapshot.data.pool.stack[0].value[1].value));
  }

  ngOnInit() {
    alert(this.poll);
  }

  print() {
    window.print();
    // const doc = new jsPDF();
    // alert(doc);
    // doc.fromHTML(this.elementRef.nativeElement.html(), 15, 15, {
    //   'width': 170,
    // });
    // doc.save('sample-file.pdf');
    // const openWindow = window.open("", "title", "attributes");
    // openWindow.document.write(this.chart.nativeElement.innerHTML);
    // openWindow.document.close();
    // openWindow.focus();
    // openWindow.print();
    // openWindow.close();
  }

  goBack() {
    history.back();
  }

  switchChartType() {
    this.chartType = this.chartType === 'pie' ? 'bar' : 'pie';
    this.chartTypeIcon = this.chartTypeIcon === 'pie_chart' ? 'show_chart' : 'pie_chart';
  }
}
