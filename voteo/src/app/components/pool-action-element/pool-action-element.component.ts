import { Component, HostBinding, Input, OnChanges } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pool-action-element',
  templateUrl: './pool-action-element.component.html',
  styleUrls: ['./pool-action-element.component.scss']
})
export class PoolActionElementComponent implements OnChanges {

  @Input() label;
  @Input() picture;
  @Input() redirectLink;
  @Input() isHovered;

  @HostBinding('style.zIndex') index;

  constructor(private router: Router) { }

  ngOnChanges(changes) {
    if (changes.isHovered) {
      if (this.isHovered) {
        this.index = 100000;
      } else {
        this.index = 10;
      }
    }
  }

  redirectToPage() {
    this.router.navigate([this.redirectLink]);
  }
}
