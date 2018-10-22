import { Component } from '@angular/core';
import { PoolsService } from '../../shared/pools/pools.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PollListType } from '../../shared/pools/pollListType';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetType } from '../../shared/pools/polls.actions';
import { slideInAnimation } from '../../shared/animations';

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
  title;

  constructor(private _poolsService: PoolsService,
              private _activatedRoute: ActivatedRoute,
              private router: Router,
              private store: Store) {

    _activatedRoute.data.subscribe(
      result => {
        this.type = result.type;

        this.store.dispatch(new SetType(this.type));

        switch (this.type) {
          case PollListType.PRIVATE_LIST : {
            this.title = 'pools.title.private';
            _poolsService.loadPrivatePolls();

            this.polls$.subscribe(polls => {
              this.polls = polls.privatePolls;
            });
            break;
          }
          case PollListType.OWN_LIST: {
            this.title = 'pools.title.own';
            this._poolsService.loadOwnPolls();
            this.areOwnPools = true;
            this.polls$.subscribe(polls => {
              this.polls = polls.ownPolls;
            });
            break;
          }
          case PollListType.PUBLIC_LIST: {
            this.title = 'pools.title.public';
            this._poolsService.loadPublicPolls();

            this.polls$.subscribe(polls => {
              this.polls = polls.publicPolls;
            });
          }
        }
      }
    );
  }

  goBack() {
    this.router.navigate(['/']);
  }

  pollTracker(index, poll) {
    return poll.id;
  }
}
