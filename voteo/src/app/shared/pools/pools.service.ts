import {Injectable} from '@angular/core';
import {NosApiService} from '../../nos-wrapper/services/nos-api.service';
import {Methods} from '../core/Methods';
import {Observable, of} from 'rxjs';
import { parsePolls } from './polls.helper';
import { SetOwnPolls, SetPrivatePolls, SetPublicPolls } from './polls.actions';
import { Store } from '@ngxs/store';


@Injectable()
export class PoolsService {

  address;
  actualPolls;

  constructor(private _nosService: NosApiService,
              private store: Store) {
    if (_nosService.isConnected()) {
      _nosService.getAddress().subscribe(
        address => {
          this.address = address;
        }
      );
    }
  }

  getOptionResult(pollId, optionId) {
    return this._nosService.testInvoke(
      Methods.scriptHash,
      Methods.getOptionResults,
      [this._nosService.address, pollId, optionId]
    );
  }

  public getPrivatePolls(address = this._nosService.address) {
    // TODO: CHHANGE
    return this._nosService.testInvoke(
      Methods.scriptHash,
      Methods.getAssignedPolls,
      [address]
    );
  }

  public getOwnPolls(address = this._nosService.address) {
    // TODO: CHHANGE
    return this._nosService.testInvoke(
      Methods.scriptHash,
      Methods.getCreatedPolls,
      [address]
    );
  }

  public getAddress() {
    return this._nosService.getAddress();
  }

  public loadPublicPolls() {
    this.getAllPublic().subscribe(
      pools => {
        const parsedPolls = parsePolls(pools);
        this.store.dispatch(new SetPublicPolls(parsedPolls));
      }
    );
  }

  public loadOwnPolls() {
    this.getOwnPolls().subscribe(
      pools => {
        const parsedPolls = parsePolls(pools);
        this.store.dispatch(new SetOwnPolls(parsedPolls));
      }
    );
  }

  public loadPrivatePolls() {
    this.getPrivatePolls().subscribe(
      pools => {
        const parsedPolls = parsePolls(pools);
        this.store.dispatch(new SetPrivatePolls(parsedPolls));
      }
    );
  }

  public getPool(id) {
    // return of({
    //   id: 0,
    //   name: 'What do you think about yourself',
    //   questions: [{
    //     name: 'kto si',
    //     'openEnded': false,
    //     'multiple': false,
    //     'options': [
    //       {'label': 'ja'},
    //       {'label': 'ty'},
    //       {'label': 'on'},
    //     ]
    //   },{
    //       name: 'where have you been',
    //       'openEnded': true,
    //       'multiple': true,
    //       'options': [
    //         {'label': 'ja'},
    //         {'label': 'ty'},
    //         {'label': 'on'},
    //       ]
    //     }]
    // });
    // return this._nosService.getStorage(
    //   Methods.scriptHash,
    //   'poll'
    // );
    return this._nosService.testInvoke(
      Methods.scriptHash,
      Methods.getPoolOperation,
      ['eqweqw']);
  }

  public registerVote(results, poolId) {
    const result = [poolId, ...results]
    return this._nosService.invoke(
      Methods.scriptHash,
      Methods.registerVote,
      [this._nosService.address, 'DATA', ...result]
    );
  }
  public getAllPublic(address = this._nosService.address) {
    return this._nosService.testInvoke(
      Methods.scriptHash,
      Methods.getPublicAll,
      [address]
    );
  }

  public getPoolById(id): Observable<any> {
    alert(id);
    alert(Methods.getPoolById);
    return this._nosService.testInvoke(
      Methods.scriptHash,
      Methods.getPoolById,
      [this._nosService.address, id]
    );
  }

  public createPool(poolParams: any, poolName) {
    const addresses = (poolParams.settings.public) ? [''] : poolParams.settings.privateAddresses;
      return this._nosService.invoke(
        Methods.scriptHash,
        Methods.createPoolOperation,
        [this._nosService.address, JSON.stringify(poolParams), poolName, ...addresses]
      );

  }

  public getPoolInvoke(script) {
    return this._nosService.invoke(
      script,
      Methods.createPoolOperation,
      ['dsajdksajkasdjskksksajdaskjsadkdjaskLUKAS', 'LUKAS']
    );
  }

  public testStorage() {
    return this._nosService.getStorage(
      '9a309cfe03cead5b653bbb11f68ff6beced8f031',
      'bucket.neo.target'
    );
  }

  public testInvoke() {
    return this._nosService.testInvoke(
      '9a309cfe03cead5b653bbb11f68ff6beced8f031',
      'GetDomain',
      ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', 'bucket.neo']
    );
  }
}
