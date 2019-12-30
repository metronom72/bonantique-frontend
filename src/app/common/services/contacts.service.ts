import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { Contact } from '../contact';

@Injectable()
export class ContactsService {
  public contacts: Subject<Contact[]> = new Subject<Contact[]>();
  public errors: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient,
    private constantsService: ConstantsService
  ) {
    this.getContacts()
      .subscribe(
        (values: { data: Contact[] }) => {
          this.contacts.next(values.data);
          this.errors.next(null);
        },
        (errors: { errors: object[] }) => {
          this.contacts.next([]);
          this.errors.next(errors.errors);
        }
      );
  }

  public createContact = (contact: Contact) => {
    this.errors.next(null);
    return this.http.post(`${this.constantsService.baseAppUrl}admin/contacts`, { new_contact: contact });
  }

  public updateContact = (id: number, contact: Contact) => {
    this.errors.next(null);
    return this.http.patch(`${this.constantsService.baseAppUrl}admin/contacts/${id}`, { contact });
  }

  public getContacts = () => {
    this.errors.next(null);
    return this.http.get(`${this.constantsService.baseAppUrl}admin/contacts`);
  }
}
