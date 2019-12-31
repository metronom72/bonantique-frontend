import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Contact, ContactScopeEnum } from '../../common/contact';
import { ContactsService } from '../../common/services/contacts.service';

@Component({
  selector: 'ba-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [
    ContactsService
  ],
})
export class FooterComponent implements OnInit {

  public phones: Contact[] = [];
  public emails: Contact[] = [];

  public isMobile: boolean;

  constructor(
    private contactsService: ContactsService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.phones = this.contactsService.contacts.filter(contact => contact.scope === ContactScopeEnum.PHONE);
    this.emails = this.contactsService.contacts.filter(contact => contact.scope === ContactScopeEnum.EMAIL);
    this.contactsService.initialize.subscribe(
      (value: boolean) => {
        if (value) {
          this.phones = this.contactsService.contacts.filter(contact => contact.scope === ContactScopeEnum.PHONE);
          this.emails = this.contactsService.contacts.filter(contact => contact.scope === ContactScopeEnum.EMAIL);
        }
      }
    );
    this.breakpointObserver
      .observe(['(max-width: 820px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      });
  }

}
