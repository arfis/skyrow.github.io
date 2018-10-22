import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../shared/contact/contact.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../shared/animations';

@Component({
  selector: 'app-page-skelet',
  templateUrl: './page-skelet.component.html',
  styleUrls: ['./page-skelet.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class PageSkeletComponent {

  contact$;
  data;

  constructor(private _contactService: ContactService) {
    this.contact$ = _contactService.getOwnUserInfo();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
