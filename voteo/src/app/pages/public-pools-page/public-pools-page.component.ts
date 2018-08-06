import {Component, OnInit} from '@angular/core';
import {PoolsService} from '../../shared/pools/pools.service';
import {stringFromHex} from '../../shared/helper';

@Component({
  selector: 'app-public-pools-page',
  templateUrl: './public-pools-page.component.html',
  styleUrls: ['./public-pools-page.component.scss']
})
export class PublicPoolsPageComponent {

  pools$;
  error;
  pools;

  constructor(private _poolsService: PoolsService) {
   _poolsService.getAllPublic().subscribe(
      result => {
        this.pools = [];
        // this.result = result.stack[0];
        for (const pool of result.stack[0].value) {
          this.pools.push(
            {
              id: stringFromHex(pool.value[0].value),
              voted: pool.value[1].value,
              canVote: stringFromHex(pool.value[2].value),
            });
        }
      },
      error => this.error = error
    )
  }

}
