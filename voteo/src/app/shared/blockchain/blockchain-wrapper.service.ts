import { Injectable } from '@angular/core';
import { NeoWrapperService } from '../../neo-wrapper/neo-wrapper.service';
import { NosApiService } from '../../nos-wrapper/services/nos-api.service';
import { BehaviorSubject, from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainWrapperService {

  address;
  isNosBrowser;
  isLoggedIn;
  afterLoginChange = new BehaviorSubject(null);

  constructor(private _neoWrapper: NeoWrapperService,
              private _nosWrapper: NosApiService) {
    this.isNosBrowser = this._nosWrapper.isConnected();
    this.setupAddress();
  }

  private setupAddress(): void {
    if (this.isNosBrowser) {
      this._nosWrapper.getAddress().subscribe(
        address => {
          this.address = address;
          this.afterLoginChange.next(address);
        });
    } else {
      this.address = this._neoWrapper.getAddress();
      this.afterLoginChange = this._neoWrapper.afterLogin;
    }
  }

  public login(privateKey): string {
    const address = this._neoWrapper.login(privateKey);
    this.address = address;
    return address;
  }

  public getAddress(): string {
    return this.address;
  }

  testInvoke(scriptHash: string, operation: string, args?: string[]): Observable<any> {

    if (this.isNosBrowser) {
      return this._nosWrapper.testInvoke(scriptHash, operation, args);
    } else {
      return this._neoWrapper.testInvoke(scriptHash, operation, args);
    }
  }

  invoke(scriptHash: string, operation: string, args?: string[]): Observable<any> {
    if (this.isNosBrowser) {
      return this._nosWrapper.invoke(scriptHash, operation, args);
    } else {
      return this._neoWrapper.invoke(scriptHash, operation, args);
    }
  }

  getStorage(scriptHash: string, key: string) {
    if (this.isNosBrowser) {
      return this._nosWrapper.getStorage(scriptHash, key);
    } else {
      return this._neoWrapper.getStorage(scriptHash, key);
    }
  }
}
