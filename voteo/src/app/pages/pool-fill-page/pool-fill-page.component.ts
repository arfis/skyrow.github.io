import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {stringFromHex} from '../../shared/helper';
import {PoolsService} from '../../shared/pools/pools.service';

@Component({
  selector: 'app-pool-fill-page',
  templateUrl: './pool-fill-page.component.html',
  styleUrls: ['./pool-fill-page.component.scss']
})
export class PoolFillPageComponent implements OnInit {

  pool = {};
  error;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pool = JSON.parse(stringFromHex(this.route.snapshot.data.pool.stack[0].value[1].value));
  }


}
