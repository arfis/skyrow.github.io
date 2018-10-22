import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pool-settings',
  templateUrl: './pool-settings.component.html',
  styleUrls: ['./pool-settings.component.scss']
})
export class PoolSettingsComponent implements OnInit {

  poolSettings: FormGroup;
  verifications = [{
    value: 'KYC',
    label: 'KYC'
  },
    {
      value: 'KYC 2.0',
      label: 'KYC 2.0'
    }];
  tokenTypes = [
    {
    value: 'ETH',
    label: 'ETH'
    },
    {
      value: 'NEO',
      label: 'NEO'
    }];

  @Output() onUpdate = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.poolSettings = fb.group({
      public: [true],
      verification: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      endDate: ['', Validators.required],
      totalReward: [0],
      totalBudget: [0],
      reward: [false],
      maxParticipants: [''],
      tokenRequirements: [false],
      minimumAmount: [],
      tokensPerVote: [],
      participans: [],
      tokenSnapshot: [new Date()],
      tokenType: [],
      privateAddresses: fb.array([]),
      audianceSpecification: [false]
    });
  }

  ngOnInit() {
    this.poolSettings.valueChanges.subscribe(
      settings => {
        this.onUpdate.emit({settings, form: this.poolSettings});
      }
    );
    this.onUpdate.emit({settings: this.poolSettings.value, form: this.poolSettings});
  }

  addPrivateAddress() {
    const option = this.fb.group({
      'address': [''],
    });
    this.addresses.push(option);
  }

  get isPublic() {
    return this.poolSettings.get('public').value;
  }

  get addresses() {
    return this.poolSettings.get('privateAddresses') as FormArray;
  }

  get isReward() {
    return this.poolSettings.get('reward').value;
  }

  get areTokenRequirements() {
    return this.poolSettings.get('tokenRequirements').value;
  }
}
