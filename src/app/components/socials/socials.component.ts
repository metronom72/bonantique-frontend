import { Component, Input, OnInit } from '@angular/core';
import { ContactsService } from '../../common/services/contacts/contacts.service';

@Component({
  selector: 'ba-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
  providers: [
    ContactsService
  ],
})
export class SocialsComponent implements OnInit {

  constructor(private contactsService: ContactsService) { }

  socials = [];

  ngOnInit() {
    this.contactsService.contacts.subscribe(
      contacts => {
        this.socials = contacts.filter(contact => contact.scope === 'socials');
      }
    );
  }

}
