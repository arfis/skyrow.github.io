import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PoolsService } from '../../shared/pools/pools.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})
export class PoolComponent implements OnInit {

  @Input()
  pool;

  result = [];
  optionResult = [];

  constructor(private _poolService: PoolsService,
              private router: Router) {

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
    this._poolService.registerVote(this.optionResult, this.pool.id).subscribe(
      result => {
        alert("Vote was registered and should be processed on blockchain within a minute. Thanks for voting!")
        this.router.navigate(['/']);
    },
      error => alert(error)
    );
  }

  updateAnswer(event, questionIndex, answer, freeText = false) {
    const question = this.pool.questions[questionIndex];

    if (!freeText) {
      if (question.multiple) {
        if (event.checked) {
          this.result[questionIndex] = {...this.result[questionIndex], answers: [...this.result[questionIndex].answers, answer.id]};
        } else {
          this.result[questionIndex].answers.splice(answer.id, 1);
        }
      } else {
        this.result[questionIndex] = {answers: [answer.id]};
      }
    } else {
      this.result[questionIndex] = {answers: [...this.result[questionIndex].answers], freeText: answer};
    }

   this.optionResult = [];

      this.result.map(
      optionIds => {
        this.optionResult = [...this.optionResult, ...optionIds.answers];
      }
    );
  }

  isMultiple(question) {
    return question.multiple;
  }
}
