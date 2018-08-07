import { Component, Input, OnInit } from '@angular/core';
import { PoolsService } from '../../shared/pools/pools.service';

@Component({
  selector: 'app-poll-result',
  templateUrl: './poll-result.component.html',
  styleUrls: ['./poll-result.component.scss']
})
export class PollResultComponent implements OnInit {

  @Input()
  option;
  @Input()
  poll;

  result;

  constructor(private _pollsService: PoolsService) {

  }

  ngOnInit() {
    this._pollsService.getOptionResult(this.poll.id, this.option.id).subscribe(
      result => {
        const pollInformation = this._pollsService.actualPolls.find(poll => poll.id === this.poll.id );

        this.result = result.stack[0].value;
      },
          error => alert(error)
    );
  }

}
