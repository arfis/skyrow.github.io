import { Injectable } from '@angular/core';
import { getTotalBalance } from './helper/neo.helper';
import { environment } from '../../environments/environment.prod';

import { api } from '@cityofzion/neon-js';
import Neon from '@cityofzion/neon-js';
import { BehaviorSubject, from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NeoWrapperService {

  private account;
  public afterLogin = new BehaviorSubject(null);

  constructor() {
  }

  getBalance(address): Promise<any> {
    return api.neoscan
      .getBalance(environment.neoURL, address)
      .then(res => getTotalBalance(res));
  }

  login(privateKey) {
    try {
      const account = Neon.create.account(privateKey);
      this.account = account;

      this.afterLogin.next(this.getAddress());
      return this.getAddress();
    } catch (error) {
      this.afterLogin.next(null);
      return null;
    }
  }

  testInvoke(scriptHash: string, operation: string, args?: string[]): Observable<any> {
    return new Observable();
  }

  invoke(scriptHash: string, operation: string, args?: string[]): Observable<any> {
    return new Observable();
  }

  getStorage(scriptHash: string, key: string) {
    return new Observable();
  }

  getAddress() {
    if (this.account) {
      return this.account.address;
    } else {
      return null;
    }
  }
}
