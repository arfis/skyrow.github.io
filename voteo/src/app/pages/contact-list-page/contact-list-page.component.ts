import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../shared/contact/contact.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ContactAddDialogComponent } from '../../components/contact-add-dialog/contact-add-dialog.component';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.scss']
})
export class ContactListPageComponent implements OnInit {

  contacts$;
  constructor(private _contactService: ContactService, private dialog: MatDialog) {
    this.contacts$ = _contactService.getContacts();
  }

  ngOnInit() {
  }

  openAddContact() {
    this.dialog.open(ContactAddDialogComponent);
  }

}
