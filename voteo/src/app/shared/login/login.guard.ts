import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlockchainWrapperService } from '../blockchain/blockchain-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private blockchainWrapper: BlockchainWrapperService,
              private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // const address = this.blockchainWrapper.isLoggedIn();

    return !!this.blockchainWrapper.address || this.blockchainWrapper.isNosBrowser;
  }
}
