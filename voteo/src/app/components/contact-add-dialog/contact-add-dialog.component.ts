import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../shared/contact/contact.service';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-add-dialog',
  templateUrl: './contact-add-dialog.component.html',
  styleUrls: ['./contact-add-dialog.component.scss']
})
export class ContactAddDialogComponent implements OnInit {

  contactForm;

  constructor(private _contactService: ContactService,
              private _dialogRef: MatDialogRef<any>,
              private fb: FormBuilder) {
    this.contactForm = fb.group({
      address: ['', Validators.required],
      name: ['', Validators.required],
      email: [''],
      city: ['']
    });

  }

  ngOnInit() {
  }

  saveContact() {
    this._contactService.addContact(this.contactForm.value);
    this._dialogRef.close();
  }
}
