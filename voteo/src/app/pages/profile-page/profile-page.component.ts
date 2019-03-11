import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnDestroy {


  @Select(state => state.polls) polls$: Observable<any>;

  createdPollsLength;
  assignmedPollsLength;

  subscriptions = [];

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  ngOnInit() {

    this.subscriptions.push(this.polls$.subscribe(
      polls => {
        const {ownPolls, privatePolls} = polls;
        this.createdPollsLength = ownPolls.length;
        this.assignmedPollsLength = privatePolls.filter(poll => poll.canVote === 'false').length;
      }
    ));
  }

  get numberOfCreatedPools() {
    return {
      number: this.createdPollsLength
    };
  }

  get numberOfAssignedPools() {
    return {
      number: this.assignmedPollsLength
    };
  }

}
