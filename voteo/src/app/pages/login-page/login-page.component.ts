import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NeoWrapperService } from '../../neo-wrapper/neo-wrapper.service';
import Neon from '@cityofzion/neon-js';
import { Router } from '@angular/router';
import { BlockchainWrapperService } from '../../shared/blockchain/blockchain-wrapper.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  config = {
    provider: 'TestNet',
    address: 'AVFzqFs7YemHtKmJ2vgEHkVBBaQf6dVyuS',
    privateKey: '7d128a6d096f0c14c3a25a2b0c41cf79661bfcb4a8cc95aaaea28bde4d732344'
  };
  balances;

  constructor(private _neoWrapperService: NeoWrapperService,
              private _blockchainService: BlockchainWrapperService,
              private router: Router) {
    this._blockchainService.afterLoginChange.subscribe(
      result => {
        if (result) {
          this.router.navigate(['/']);
        }
      }
    );
  }

  register() {
    const privateKey = Neon.create.privateKey();
    const account = Neon.create.account(privateKey);

    this.config.address = account.address;
    this.config.privateKey = account.privateKey;
  }

  login() {
    const isLoggedIn = this._blockchainService.login(this.config.privateKey);
    if (isLoggedIn) {
      this.router.navigate(['/']);
    }
  }

  getBalance() {
    this._neoWrapperService
      .getBalance(this.config.address)
      .then(res => {
        this.balances = res;
      });
  }

}
