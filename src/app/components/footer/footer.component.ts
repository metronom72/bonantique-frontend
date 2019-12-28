import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ContactsService } from '../../common/services/contacts/contacts.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'ba-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [
    ContactsService
  ],
})
export class FooterComponent implements OnInit {

  public phones = [];
  public emails = [];

  public isMobile: boolean;

  constructor(
    private contactsService: ContactsService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.contactsService.contacts.subscribe(
      contacts => {
        this.phones = contacts.filter(contact => contact.scope === 'phone');
        this.emails = contacts.filter(contact => contact.scope === 'email');
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
