import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pool-tile',
  templateUrl: './pool-tile.component.html',
  styleUrls: ['./pool-tile.component.scss']
})
export class PoolTileComponent implements OnInit {

  @Input()
  pool;

  poolTitle;
  numberOfQuestions = 0;
  voted = 0;
  hasVoted;

  constructor(private router: Router) {
  }

  ngOnInit() {
    const parsedArray = this.pool.id.split('_');
    if (parsedArray.length > 2) {
      this.poolTitle = parsedArray[1] ? parsedArray[1] : '-';
      this.numberOfQuestions = parsedArray[2] ? parsedArray[2] : '0';
    }

    this.voted = this.pool.voted;
    this.hasVoted = this.pool.canVote === 'true' ? true : false;
  }

  openVoting() {
    if (this.hasFreeVoting) {
      this.router.navigate([`pool/${this.pool.id}`]);
    }
  }

  get neededVoters() {
    return (this.pool.needsVotes) ? this.pool.needsVotes : 0;
  }

  get hasFreeVoting() {
    return true; //this.voted < this.neededVoters;
  }
}
