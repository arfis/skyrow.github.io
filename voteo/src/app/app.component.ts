import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { BlockchainWrapperService } from './shared/blockchain/blockchain-wrapper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  address;

  constructor(private _translateService: TranslateService,
              private router: Router,
              private _blockchainService: BlockchainWrapperService) {
    _translateService.addLangs(['sk', 'en']);
    _translateService.setDefaultLang('en');

    // const browserLang = this._translateService.getBrowserLang();
    _translateService.use('en');

    this._blockchainService.afterLoginChange.subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          router.navigate(['/']);
        } else {
          router.navigate(['login']);
        }
      }
    )
  }
}
