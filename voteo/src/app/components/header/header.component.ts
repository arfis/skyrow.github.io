import {Component, OnInit} from '@angular/core';
import {PoolsService} from '../../shared/pools/pools.service';
import {TranslateService} from '@ngx-translate/core';
import { BlockchainWrapperService } from '../../shared/blockchain/blockchain-wrapper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages = [
    'sk', 'en'
  ];

  selectedLanguage;
  isLoggedIn;

  constructor(private _translateService: TranslateService,
              private _poolsService: PoolsService,
              private _blockchainService: BlockchainWrapperService) {

  }


  changeLanguage(language) {
    this._translateService.use(language);
    this.selectedLanguage = language;
  }

  ngOnInit() {
    this.selectedLanguage = this.languages[1];
    this._blockchainService.afterLoginChange.subscribe(
      result => {
        this.isLoggedIn = result;
      }
    )
  }

  get address() {
    return this._poolsService.address || '-';
  }
}
