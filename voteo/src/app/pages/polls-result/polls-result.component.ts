import { Component, OnInit } from '@angular/core';
import { stringFromHex } from '../../shared/helper';
import { PoolsService } from '../../shared/pools/pools.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-polls-result',
  templateUrl: './polls-result.component.html',
  styleUrls: ['./polls-result.component.scss']
})
export class PollsResultPageComponent implements OnInit {

  poll;

  constructor(private route: ActivatedRoute, private _poolService: PoolsService) {
    this.poll = JSON.parse(stringFromHex(this.route.snapshot.data.pool.stack[0].value[1].value));
  }

  ngOnInit() {
  }

}
