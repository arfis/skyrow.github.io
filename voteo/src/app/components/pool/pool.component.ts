import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PoolsService } from '../../shared/pools/pools.service';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})
export class PoolComponent implements OnInit {

  @Input()
  pool;

  result = [];

  constructor(private _poolService: PoolsService) {

  }

  ngOnInit() {

    this.result = new Array<any>(this.pool.questions.length);
    this.result.fill([]);
    // const option = this.fb.group({
    //   'label': [label, Validators.required]
    // });
    // this.options.push(option);
  }

  vote() {
    this._poolService.registerVote(this.result, this.pool.id).subscribe(
      result => alert(result),
      error => alert(error)
    );
  }

  updateAnswer(event, questionIndex, answer) {
    alert(event);
    if (this.result[questionIndex].indexOf(answer) === -1) {
      this.result[questionIndex].push(answer);
    } else {
      this.result[questionIndex].splice(answer, 1);
    }
  }
}
