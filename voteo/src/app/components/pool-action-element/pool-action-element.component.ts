import { Component, HostBinding, HostListener, Input, OnChanges, OnInit } from '@angular/core';
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
  @Input() defaultHovered;

  hovered;

  @HostBinding('style.zIndex')
  index;

  @HostListener('mouseover', ['$event'])
  onMouseOver() {
    this.hovered = true;
    this.index = 100000;
  }

  @HostListener('mouseout', ['$event'])
  onMouseOut() {
    this.hovered = false;
    this.index = 10;
  }

  constructor(private router: Router) { }

  ngOnChanges(changes) {
    if (changes.defaultHovered && !this.hovered) {
      if (this.defaultHovered) {
        this.index = 1000;
      } else {
        this.index = 10;
      }
    }
  }

  redirectToPage() {
    this.router.navigate([this.redirectLink]);
  }
}
