import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../../../common/services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../../common/contact';

@Component({
  selector: 'ba-edit-contacts',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class ContactsEditComponent implements OnInit {
  public contactForm = new FormGroup({
    link: new FormControl(null),
    scope: new FormControl(null, Validators.required),
    active: new FormControl(true, Validators.required),
    value: new FormControl(null, Validators.required),
    label: new FormControl(null, Validators.required),
  });
  public type: string;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.route.snapshot.params.id !== 'new') {
      this.type = 'edit';
      this.resetForm();
    } else {
      this.type = 'new';
    }
  }

  onSubmit = (): void => {
    if (this.route.snapshot.params.id !== 'new') {
      this.contactsService.updateContact(
        parseInt(this.route.snapshot.params.id, 10), this.contactForm.value)
          .subscribe(this.refreshContacts);
    } else {
      this.contactsService.createContact(
        this.contactForm.value)
          .subscribe(this.refreshContacts);
    }
  }

  private refreshContacts = () => this.contactsService.getContacts();

  private resetForm = async () => {
    const contact = this.contactsService.contacts.find((c: Contact): boolean => c.id.toString() === this.route.snapshot.params.id);
    if (contact) {
      this.contactForm.reset(contact);
    } else {
      await this.router.navigateByUrl('/admin/contacts');
    }
  }

}
