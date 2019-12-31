import { Component, OnInit } from '@angular/core';
import { Contact, ContactScopeEnum } from '../../common/contact';
import { ContactsService } from '../../common/services/contacts.service';

@Component({
  selector: 'ba-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent implements OnInit {

  constructor(private contactsService: ContactsService) { }

  socials: Contact[] = [];

  ngOnInit() {
    this.contactsService.contacts.subscribe(
      (contacts: Contact[]) => {
        this.socials = contacts.filter(contact => contact.scope === ContactScopeEnum.SOCIALS);
      }
    );
  }

}
