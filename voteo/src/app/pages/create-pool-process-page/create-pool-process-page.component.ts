import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PoolsService } from '../../shared/pools/pools.service';

import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddPoll } from '../../shared/pools/polls.actions';

@Component({
  selector: 'app-create-pool-process-page',
  templateUrl: './create-pool-process-page.component.html',
  styleUrls: ['./create-pool-process-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePoolProcessPageComponent implements OnInit {

  @ViewChild('newQuestion') newQuestion: ElementRef;

  pool = {
    questions: [
      {
        'name': '',
        'openEnded': false,
        'multiple': false,
        'options': []
      }],
    settings: {},
    poolTitle: '',
    id: '',
    pending: true,
    numberOfQuestions: '',
    voted: 0,
    canVote: true,
    created: null,
    votePending: false,
  };

  currentIndex = 0;
  currentQuestion = {};
  waitingValidation = false;
  testResult;
  receivedPool;
  newPool;
  error;
  poolName = '';
  updatedQuestions = [];
  questions = [{}];

  questionsForm;
  settingsForm;

  constructor(private _poolsService: PoolsService,
              private router: Router,
              private store: Store) {
  }

  ngOnInit() {
    this.currentQuestion = this.pool[this.currentIndex];
  }

  continueToSummary(question) {
    this.pool[this.currentIndex] = question;
    this.currentQuestion = question;
    this.waitingValidation = true;
  }

  goToEdit() {
    this.waitingValidation = false;
  }

  addNew() {
    this.questions.push({});
  }

  removeCurrentQuestion(index) {
    // this.currentQuestion = this.pool[this.currentIndex];
    this.questions.splice(index, 1);
    this.pool.questions.splice(index, 1);
  }

  settingUpdate(data) {
    const {settings, form} = data;
    this.settingsForm = form;
    console.log(settings, form);
    (this.pool as any).settings = {...settings, privateAddresses: settings.privateAddresses.map(address => address.address)};
  }

  questionsUpdate(data, index) {
    const {questions, form} = data;
    this.pool.questions[index] = questions;
    this.questionsForm = form;
  }

  createPool() {
    if (this.hasQuestions && this.poolName.length > 0) {

      this.pool.poolTitle = this.poolName;
      this.pool.id = `${uuid()}_${this.poolName}_${this.pool.questions.length}`;
      this.pool.numberOfQuestions = String(this.pool.questions.length);
      this.pool.created = new Date();

      this._poolsService.createPool(this.pool, this.pool.id).subscribe(
        () => {
          this.store.dispatch(new AddPoll(this.pool));
          this.router.navigate(['/ownPools']);
          // this.receivedPool = result.script.replace('\'','');
        },
        error => {
          alert('There was some issue with writing data into blockchain. Wait a couple of minutes and try again.');
          this.error = error;
        }
      );
    }
  }


  testInvoke() {
    this._poolsService.testInvoke().subscribe(
      result => {
        this.testResult = result;

        if (result.stack) {
          this.testResult = result;
          // this.testResult = stringFromHex(result.stack[0].value);
        }
        // this.testResult = stringFromArray(result.stack[0].value);
      },
      error => console.log('ON ERROR =', error)
    );
  }

  get hasQuestions() {
    return this.pool.questions.length > 0;
  }

  get numberOfQuestions() {
    return this.pool.questions.length - 1;
  }
}
