import { Component } from '@angular/core';
import { PoolsService } from '../../shared/pools/pools.service';
import { ActivatedRoute } from '@angular/router';
import { PollListTypes } from '../../shared/pools/pollListTypes';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetType } from '../../shared/pools/polls.actions';

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
  type;

  constructor(private _poolsService: PoolsService,
              private _activatedRoute: ActivatedRoute,
              private store: Store) {

    _activatedRoute.data.subscribe(
      result => {
        this.type = result.type;

        this.store.dispatch(new SetType(this.type));

        switch (this.type) {
          case PollListTypes.PRIVATE_LIST : {
            _poolsService.loadPrivatePolls();

            this.polls$.subscribe(polls => {
              this.polls = polls.privatePolls;
            });
            break;
          }
          case PollListTypes.OWN_LIST: {
            this._poolsService.loadOwnPolls();
            this.areOwnPools = true;
            this.polls$.subscribe(polls => {
              this.polls = polls.ownPolls;
            });
            break;
          }
          case PollListTypes.PUBLIC_LIST: {
            this._poolsService.loadPublicPolls();

            this.polls$.subscribe(polls => {
              this.polls = polls.publicPolls;
            });
          }
        }
      }
    );
  }

}
