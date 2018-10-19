import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoolsService } from '../../shared/pools/pools.service';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pool-actions',
  templateUrl: './pool-actions.component.html',
  styleUrls: ['./pool-actions.component.scss']
})
export class PoolActionsComponent implements OnInit {

  publicPollsCount;
  privatePollsCount;
  ownPollsCount;
  isMouseOutside = true;

  @HostListener('mouseout', ['$event'])
  onMouseOut() {
    this.isMouseOutside = true;
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver() {
    this.isMouseOutside = false;
  }

  @Select(state => state.polls) polls$: Observable<any>;

  constructor(private router: Router,
              private _pollService: PoolsService) {
  }

  ngOnInit() {

    this.polls$.subscribe(
      polls => {
        this.privatePollsCount = polls.privatePolls.filter(poll => poll.canVote === 'false').length;
        this.publicPollsCount = polls.publicPolls.filter(poll => poll.canVote === 'false').length;
        this.ownPollsCount = polls.ownPolls.length;
      }
    )
    this._pollService.getAddress().subscribe(address => {
      this._pollService.loadPrivatePolls();
      this._pollService.loadPublicPolls();
    });
  }

  createPool() {
    this.router.navigate(['/create']);
  }

  get numberOfPrivatePollsCount() {
    return {numberOfPools: this.privatePollsCount};
  }

  get numberOfPublicPools() {
    return {numberOfPools: this.publicPollsCount};
  }

  get numberOfOwnPolls() {
    return {numberOfPools: this.ownPollsCount};
  }
}
