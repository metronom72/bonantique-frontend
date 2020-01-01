import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../common/services/contacts.service';
import { Contact } from '../../common/contact';

@Component({
  selector: 'ba-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

  public contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactsService.contacts;
    this.contactsService.initialize
      .subscribe(
        (value: boolean): void => {
          if (value) {
            this.contacts = this.contactsService.contacts;
          }
        }
      );
  }

}
