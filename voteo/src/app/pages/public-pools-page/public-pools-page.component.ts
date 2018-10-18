import { Component, OnInit } from '@angular/core';
import { PoolsService } from '../../shared/pools/pools.service';
import { stringFromHex } from '../../shared/helper';
import { parsePolls } from '../../shared/pools/polls.helper';
import { SetOwnPolls, SetPublicPolls } from '../../shared/pools/polls.actions';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-public-pools-page',
  templateUrl: './public-pools-page.component.html',
  styleUrls: ['./public-pools-page.component.scss']
})
export class PublicPoolsPageComponent implements OnInit {

  pools$;
  error;
  polls = [];

  @Select(state => state.polls) polls$: Observable<any>;

  constructor(private _poolsService: PoolsService,
              private store: Store) {
    this.polls$.subscribe(polls => {
        this.polls = polls.publicPolls;
    });
  }

  ngOnInit() {
    this._poolsService.getAllPublic().subscribe(
      pools => {
        const parsedPolls = parsePolls(pools);
        this.store.dispatch(new SetPublicPolls(parsedPolls));
      }
    );
  }
}
