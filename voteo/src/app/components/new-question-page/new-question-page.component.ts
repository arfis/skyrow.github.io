import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PoolsService} from '../../shared/pools/pools.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-new-question-page',
  templateUrl: './new-question-page.component.html',
  styleUrls: ['./new-question-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewQuestionPageComponent implements OnChanges, AfterViewInit {

  @Output()
  onUpdate = new EventEmitter();
  @Output()
  afterClickOnRemove = new EventEmitter();

  @Input()
  question;
  @Input()
  numberOfQuestions;
  @Input()
  currentQuestionIndex;

  createQuestionForm: FormGroup;
  optionIndex = 0;

  constructor(private fb: FormBuilder, private _el: ElementRef) {
    this.initForm();
  }

  ngAfterViewInit() {
    this._el.nativeElement.scrollIntoView({
      behavior: 'smooth'
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.question) {
      this.initForm();

      if (this.question) {
        if (this.question.options) {
          for (const option of this.question.options) {
           this.addOption();
          }
        }

        this.createQuestionForm.patchValue(this.question);
      }
    }
  }

  removeOption(index) {
    this.options.removeAt(index);
  }

  initForm() {
    this.optionIndex = 0;

    this.createQuestionForm = this.fb.group({
      'name': ['', Validators.required],
      'openEnded': [false],
      'multiple': [false],
      'options': this.fb.array([])
    });

    this.createQuestionForm.valueChanges.subscribe(
      questions => {
        this.onUpdate.emit({form: this.createQuestionForm, questions});
      }
    );
  }

  addOption(label = '') {
    const option = this.fb.group({
      'id': [uuid()],
      'label': [label, Validators.required]
    });
    this.optionIndex++;

    this.options.push(option);
  }

  removeCurrentQuestion() {
    this.afterClickOnRemove.next();
  }

  get hasMoreQuestions() {
    return this.currentQuestionIndex < this.numberOfQuestions - 1;
  }
  get options() {
    return this.createQuestionForm.get('options') as FormArray;
  }

  set options(options) {
    this.createQuestionForm.get('options').setValue(options);
  }

  get operation() {
    return this.currentQuestionIndex < this.numberOfQuestions ? '>' : '+';
  }
}
