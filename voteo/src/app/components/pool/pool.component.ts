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
    this.result.fill({answers: [], freeText: ''});
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

  updateAnswer(event, questionIndex, answer, freeText = false) {
    const question = this.pool.questions[questionIndex];

    if (!freeText) {
      if (question.multiple) {
        if (event.checked) {
          alert(answer);
          this.result[questionIndex] = {...this.result[questionIndex], answers: [...this.result[questionIndex].answers, answer]};
        } else {
          this.result[questionIndex].answers.splice(answer, 1);
        }
      } else {
        this.result[questionIndex] = {answers: [answer]};
      }
    } else {
      this.result[questionIndex] = {answers: [...this.result[questionIndex].answers], freeText: answer};
    }
  }

  isMultiple(question) {
    return question.multiple;
  }
}
