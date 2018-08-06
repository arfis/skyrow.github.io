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

  constructor(private router: Router) {
  }

  ngOnInit() {
    const parsedArray = this.pool.split('_');
    if (parsedArray.length > 2) {
      this.poolTitle = parsedArray[1] ? parsedArray[1] : '-';
      this.numberOfQuestions = parsedArray[2] ? parsedArray[2] : '0';
    }
  }

  openVoting() {
    if (this.hasFreeVoting) {
      this.router.navigate([`pool/${this.pool}`]);
    }
  }


  get voted() {
    return (this.pool.voted) ? this.pool.voted : 0;
  }

  get neededVoters() {
    return (this.pool.needsVotes) ? this.pool.needsVotes : 0;
  }

  get hasFreeVoting() {
    return true; //this.voted < this.neededVoters;
  }
}
