import { Injectable } from '@angular/core';
import {PoolsService} from './pools.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {hexToString} from '../core/helper';

@Injectable({
  providedIn: 'root'
})
export class PoolResolver implements Resolve<any> {
  constructor(private _poolsService: PoolsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id').toString();

    this._poolsService.getPoolById(id).subscribe(
      res => alert(JSON.stringify(res))
    );

    return this._poolsService.getPoolById(id);
  }
}
