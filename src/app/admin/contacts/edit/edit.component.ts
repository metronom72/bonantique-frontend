import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../../common/services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ba-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [ContactsService]
})
export class EditComponent implements OnInit {
  public contactForm = new FormGroup({
    link: new FormControl(null),
    scope: new FormControl(null, Validators.required),
    active: new FormControl(true, Validators.required),
    value: new FormControl(null, Validators.required),
    label: new FormControl(null, Validators.required),
  })

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.contactsService.contacts
      .subscribe(
        contacts => {
          const contact = contacts.find(c => c.id.toString() === this.route.snapshot.params.id);
          if (contact) {
            this.contactForm.reset(contact);
          } else {
            this.router.navigateByUrl('/admin/contacts');
          }
        }
      );
  }

  onSubmit = () => {
    this.contactsService.updateContact(parseInt(this.route.snapshot.params.id, 10), this.contactForm.value)
      .subscribe(
        (values: any) => {
          this.contactsService.getContacts();
          this.router.navigateByUrl('/admin/contacts');
        },
        (errors: any) => {
          this.router.navigateByUrl('/admin/contacts');
        }
      )
  }

}
