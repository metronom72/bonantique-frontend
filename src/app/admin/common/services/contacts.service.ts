import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../../../common/services/constants.service';
import { AdminModule } from '../../admin.module';

@Injectable()
export class ContactsService {
  public contacts: Subject<any> = new Subject<any>()
  public errors: Subject<any> = new Subject<any>()

  constructor(
    private http: HttpClient,
    private constantsService: ConstantsService
  ) {
    this.getContacts();
  }

  public createContact = (contact: object) => {
    this.errors.next(null);
    return this.http.post(`${this.constantsService.baseAppUrl}admin/contacts`, { new_contact: contact });
  }

  public updateContact = (id: number, contact: object) => {
    this.errors.next(null);
    return this.http.patch(`${this.constantsService.baseAppUrl}admin/contacts/${id}`, { contact });
  }

  public getContacts = () => {
    this.errors.next(null);
    return this.http.get(`${this.constantsService.baseAppUrl}admin/contacts`)
      .subscribe(
      (values: any) => {
        this.contacts.next(values.data);
      },
      (errors: any) => {
        this.errors.next(errors.errors);
      }
    );
  }
}
