import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoolsService } from '../../shared/pools/pools.service';

@Component({
  selector: 'app-pool-actions',
  templateUrl: './pool-actions.component.html',
  styleUrls: ['./pool-actions.component.scss']
})
export class PoolActionsComponent implements OnInit {

  publicPollsCount;
  privatePollsCount;
  isMouseOutside = true;

  @HostListener('mouseout', ['$event'])
  onMouseOut() {
    this.isMouseOutside = true;
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver() {
    this.isMouseOutside = false;
  }

  constructor(private router: Router,
              private _pollService: PoolsService) {
  }

  ngOnInit() {

    this._pollService.getAddress().subscribe(address => {
      this._pollService.getAllPublic(address).subscribe(
        result => {
          this.publicPollsCount = result.stack[0].value.length;
          console.log(this.publicPollsCount);
        }
      );

      this._pollService.getPrivatePolls(address).subscribe(
        result => {
          this.privatePollsCount = result.stack[0].value.length;
        }
      );
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
}
