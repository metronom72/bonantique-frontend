import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../common/services/contacts.service';
import { Contact } from '../../common/contact';

@Component({
  selector: 'ba-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {

  public contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.contacts
      .subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;
        }
      );
  }

}
