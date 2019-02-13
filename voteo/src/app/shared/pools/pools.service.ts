import {Injectable} from '@angular/core';
import {Methods} from '../core/Methods';
import {Observable, of} from 'rxjs';
import { parsePolls } from './polls.helper';
import { SetOwnPolls, SetPrivatePolls, SetPublicPolls } from './polls.actions';
import { Store } from '@ngxs/store';
import { BlockchainWrapperService } from '../blockchain/blockchain-wrapper.service';


@Injectable()
export class PoolsService {

  address;
  actualPolls;

  constructor(private _blockchainService: BlockchainWrapperService,
              private store: Store) {
    this._blockchainService.afterLoginChange.subscribe(
      result => this.address = result
    )
  }

  getOptionResult(pollId, optionId) {
    return this._blockchainService.testInvoke(
      Methods.scriptHash,
      Methods.getOptionResults,
      [this._blockchainService.address, pollId, optionId]
    );
  }

  public getPrivatePolls(address = this._blockchainService.address) {
    // TODO: CHHANGE
    return this._blockchainService.testInvoke(
      Methods.scriptHash,
      Methods.getAssignedPolls,
      [address]
    );
  }

  public getOwnPolls(address = this._blockchainService.address) {
    // TODO: CHHANGE
    return this._blockchainService.testInvoke(
      Methods.scriptHash,
      Methods.getCreatedPolls,
      [address]
    );
  }

  public getAddress() {
    return this._blockchainService.getAddress();
  }

  public loadPublicPolls() {
    if (this.getAllPublic()) {
      this.getAllPublic().subscribe(
        pools => {
          const parsedPolls = parsePolls(pools);
          this.store.dispatch(new SetPublicPolls(parsedPolls));
        }
      );
    }
  }

  public loadOwnPolls() {
    if (this.getOwnPolls()) {
      this.getOwnPolls().subscribe(
        pools => {
          const parsedPolls = parsePolls(pools);
          this.store.dispatch(new SetOwnPolls(parsedPolls));
        }
      );
    }
  }

  public loadPrivatePolls() {
    if (this.getPrivatePolls()) {
      this.getPrivatePolls().subscribe(
        pools => {
          const parsedPolls = parsePolls(pools);
          this.store.dispatch(new SetPrivatePolls(parsedPolls));
        }
      );
    }
  }

  public getPool(id) {
    return this._blockchainService.testInvoke(
      Methods.scriptHash,
      Methods.getPoolOperation,
      ['eqweqw']);
  }

  public registerVote(results, poolId) {
    const result = [poolId, ...results]
    return this._blockchainService.invoke(
      Methods.scriptHash,
      Methods.registerVote,
      [this._blockchainService.address, 'DATA', ...result]
    );
  }
  public getAllPublic(address = this._blockchainService.address) {
    return this._blockchainService.testInvoke(
      Methods.scriptHash,
      Methods.getPublicAll,
      [address]
    );
  }

  public getPoolById(id): Observable<any> {
    return this._blockchainService.testInvoke(
      Methods.scriptHash,
      Methods.getPoolById,
      [this._blockchainService.address, id]
    );
  }

  public createPool(poolParams: any, poolName) {
    const addresses = (poolParams.settings.public) ? [''] : poolParams.settings.privateAddresses;
      return this._blockchainService.invoke(
        Methods.scriptHash,
        Methods.createPoolOperation,
        [this._blockchainService.address, JSON.stringify(poolParams), poolName, ...addresses]
      );

  }

  public getPoolInvoke(script) {
    return this._blockchainService.invoke(
      script,
      Methods.createPoolOperation,
      ['dsajdksajkasdjskksksajdaskjsadkdjaskLUKAS', 'LUKAS']
    );
  }

  public testStorage() {
    return this._blockchainService.getStorage(
      '9a309cfe03cead5b653bbb11f68ff6beced8f031',
      'bucket.neo.target'
    );
  }

  public testInvoke() {
    return this._blockchainService.testInvoke(
      '9a309cfe03cead5b653bbb11f68ff6beced8f031',
      'GetDomain',
      ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', 'bucket.neo']
    );
  }
}
