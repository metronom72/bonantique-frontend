import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public contacts: Contact[] = [];
  public errors: Subject<any> = new Subject<any>();
  public initialize: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private constantsService: ConstantsService
  ) {
    this.initialize.next(false);
    this.getContacts()
      .subscribe(
        (values: { data: Contact[] }) => {
          this.contacts = values.data;
          this.errors.next(null);
          this.initialize.next(true);
        },
        (errors: { errors: object[] }) => {
          this.contacts = [];
          this.errors.next(errors.errors);
          this.initialize.next(true);
        }
      );
  }

  public refresh = () => {
    this.getContacts()
      .subscribe(
        (values: {data: Contact[]}) => {
          this.contacts = values.data;
          this.initialize.next(true);
          this.errors.next(null);
        },
        (errors: {errors: object[]}) => {
          this.contacts = [];
          this.initialize.next(true);
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

  public getContacts = (admin = false) => {
    this.errors.next(null);
    if (admin) {
      return this.http.get(`${this.constantsService.baseAppUrl}admin/contacts`);
    }
    return this.http.get(`${this.constantsService.baseAppUrl}contacts`);
  }
}
