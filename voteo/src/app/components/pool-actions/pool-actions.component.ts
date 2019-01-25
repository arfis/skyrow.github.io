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
  hoveredItem = 2;
  items = [
    {
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZlggA4RAvHkDD1nPAUczniJr_ts8zpECLEFWayyzxaPwIhPPXQ',
      label: 'pools.types.add',
      redirectionLink: '/create'
    },
    {
      picture: 'assets/img/pools.png',
      label: 'pools.types.create',
      redirectionLink: '/ownPools'
    },
    {
      picture: 'assets/img/vote.png',
      label: 'pools.types.vote',
      redirectionLink: '/pools'
    },
    {
      picture: 'assets/img/public_pools.png',
      label: 'pools.types.create',
      redirectionLink: '/ownPools'
    }
  ];
  @Select(state => state.polls) polls$: Observable<any>;

  @HostListener('mouseout', ['$event'])
  onMouseOut() {
    this.hoveredItem = -1;
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event) {
    const {keyCode} = event;
    if (event.key === 'Enter') {
      this.router.navigate([this.items[this.hoveredItem].redirectionLink]);
      return;
    }

    switch (keyCode) {
      case 39: {
        if (this.hoveredItem < this.items.length - 1) {
          this.hoveredItem++;
        }
        break;
      }
      case 37: {
        if (this.hoveredItem > 0) {
          this.hoveredItem--;
        }
      }
    }
  }

  constructor(private router: Router,
              private _pollService: PoolsService) {
  }

  onMouseOverItem(itemNumber) {
    this.hoveredItem = itemNumber;
  }

  ngOnInit() {

    this.polls$.subscribe(
      polls => {
        this.privatePollsCount = polls.privatePolls.filter(poll => poll.canVote === 'false').length;
        this.publicPollsCount = polls.publicPolls.filter(poll => poll.canVote === 'false').length;
        this.ownPollsCount = polls.ownPolls.length;
      }
    );
    if (this._pollService.getAddress()) {
      this._pollService.getAddress().subscribe(address => {
        this._pollService.loadPrivatePolls();
        this._pollService.loadPublicPolls();
        this._pollService.loadOwnPolls();
      });
    }
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
