import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PoolsService } from '../../shared/pools/pools.service';
import { stringFromArray, stringFromHex } from '../../shared/helper';

import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pool-process-page',
  templateUrl: './create-pool-process-page.component.html',
  styleUrls: ['./create-pool-process-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
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
    title: '',
    id: ''
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

  constructor(private _poolsService: PoolsService,
              private router: Router) {
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
    window.scrollBy(200, 200);
  }

  removeCurrentQuestion(index) {
    // this.currentQuestion = this.pool[this.currentIndex];
    console.log('removing index');
    this.questions.splice(index, 1);
    this.pool.questions.splice(index, 1);
  }

  settingUpdate(settings) {
    (this.pool as any).settings = {...settings, privateAddresses: settings.privateAddresses.map(address => address.address)};
  }

  questionsUpdate(question, index) {
    console.log('update ', index, question);
    this.pool.questions[index] = question;
    console.log(this.pool);
  }

  createPool() {
    if (this.hasQuestions && this.poolName.length > 0) {

      this.pool.title = this.poolName;
      this.pool.id = `${uuid()}_${this.poolName}_${this.pool.questions.length}`;

      this._poolsService.createPool(this.pool, this.pool.id).subscribe(
        result => {
          this.router.navigate['/'];
          alert('Poll was written into the blockchain. Poll will be visible in the public/private views within a minute. Please be patient.');
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
        console.log('rest ', result);
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
