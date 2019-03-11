import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PollModel } from '../../shared/pools/poll.model';

@Component({
  selector: 'app-pool-tile',
  templateUrl: './pool-tile.component.html',
  styleUrls: ['./pool-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoolTileComponent {

  @Input() pool: PollModel;
  @Input() ownPoll;

  constructor(private router: Router) {
  }


  openVoting() {
    if (this.hasFreeVoting) {
      this.router.navigate([`/pool/${this.pool.id}`]);
    }
  }

  showResults() {
    if (this.isOwnPoll) {
      this.router.navigate([`/result/${this.pool.id}`]);
    }
  }

  get poolTitle() {
    return this.pool.poolTitle;
  }

  get numberOfQuestions() {
    return this.pool.numberOfQuestions;
  }

  get voted() {
    return this.pool.voted;
  }

  get hasVoted() {
    return this.pool.canVote === 'true' ? true : false;
  }

  get isOwnPoll() {
    return this.ownPoll;
  }

  get isPending() {
    return this.pool.pending;
  }

  get hasFreeVoting() {
    return true; //this.voted < this.neededVoters;
  }
}
