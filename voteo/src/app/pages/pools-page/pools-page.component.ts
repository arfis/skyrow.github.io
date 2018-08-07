import { Component, OnInit } from '@angular/core';
import { PoolsService } from '../../shared/pools/pools.service';
import { ActivatedRoute } from '@angular/router';
import { PollListTypes } from '../../shared/pools/pollListTypes';
import { stringFromHex } from '../../shared/helper';

@Component({
  selector: 'app-pools-page',
  templateUrl: './pools-page.component.html',
  styleUrls: ['./pools-page.component.scss']
})
export class PoolsPageComponent implements OnInit {

  pools;

  constructor(private _poolsService: PoolsService,
              private _activatedRoute: ActivatedRoute) {

    _activatedRoute.data.subscribe(
      result => {
        switch (result.type) {
          case PollListTypes.PRIVATE_LIST : {
            _poolsService.getPrivatePolls().subscribe(
              pools => {
                this.pools = [];
                // this.result = result.stack[0];
                for (const pool of pools.stack[0].value) {
                  alert(JSON.stringify(pool));
                  // alert('here');
                  this.pools.push(
                    {
                      id: stringFromHex(pool.value[0].value),
                      voted: pool.value[1].value,
                      canVote: stringFromHex(pool.value[2].value),
                    });
                }
              }
            );
            break;
          }
          case PollListTypes.OWN_LIST: {
            _poolsService.getOwnPolls().subscribe(
              pools => {
                this.pools = [];
                // this.result = result.stack[0];
                for (const pool of pools.stack[0].value) {
                  alert(JSON.stringify(pool));
                  this.pools.push(
                    {
                      id: stringFromHex(pool.value[0].value),
                      voted: pool.value[1].value,
                      canVote: stringFromHex(pool.value[2].value),
                    });
                }
              }
            );
            break;
          }
          default: {
            break;
          }
        }
      }
    );
  }

  ngOnInit() {
  }

}
