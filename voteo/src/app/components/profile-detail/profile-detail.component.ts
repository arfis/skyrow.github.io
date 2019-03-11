import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent {

  showDetail = false;
  constructor() { }

  toggleShowDetail() {
    this.showDetail  = !this.showDetail;
  }
}
