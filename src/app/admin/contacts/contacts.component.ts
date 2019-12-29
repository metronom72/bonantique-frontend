import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../common/services/contacts.service';

@Component({
  selector: 'ba-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {



  public contacts: object[] = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.contacts
      .subscribe(
        contacts => {
          this.contacts = contacts;
        }
      );
  }

}
