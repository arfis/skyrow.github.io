import { Component, OnInit } from '@angular/core';
import { PoolsService } from '../../shared/pools/pools.service';
import { ActivatedRoute } from '@angular/router';
import { PollListTypes } from '../../shared/pools/pollListTypes';
import { stringFromHex } from '../../shared/helper';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetOwnPolls, SetPrivatePolls } from '../../shared/pools/polls.actions';
import { PollModel } from '../../shared/pools/poll.model';
import { parsePolls } from '../../shared/pools/polls.helper';

@Component({
  selector: 'app-pools-page',
  templateUrl: './pools-page.component.html',
  styleUrls: ['./pools-page.component.scss']
})
export class PoolsPageComponent {

  @Select(state => state.polls) polls$: Observable<any>;
  pools = [{id: 'name_tileee'}, {id: 'name_tileee'}, {id: 'name_tileee'}, {id: 'name_tileee'},
    {id: 'name_tileee'}, {id: 'name_tileee'}, {id: 'name_tileee'}, {id: 'name_tileee'},
    {id: 'name_tileee'}, {id: 'name_tileee'}, {id: 'name_tileee'}, {id: 'name_tileee'}];
  areOwnPools;
  polls;

  // testPool = {
  //   id: 'nameOfThePool_The titleeee_4',
  //   voted: 12,
  //   canVote: true,
  // };
  constructor(private _poolsService: PoolsService,
              private _activatedRoute: ActivatedRoute,
              private store: Store) {

    _activatedRoute.data.subscribe(
      result => {
        switch (result.type) {
          case PollListTypes.PRIVATE_LIST : {
            _poolsService.loadPrivatePolls();

            this.polls$.subscribe(polls => {
              this.polls = polls.privatePolls;
            })
            break;
          }
          case PollListTypes.OWN_LIST: {
            this._poolsService.loadOwnPolls();
            this.areOwnPools = true;
            this.polls$.subscribe(polls => {
              this.polls = polls.ownPolls;
            });
          }
        }
      }
    );
  }

}
