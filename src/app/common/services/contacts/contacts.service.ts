import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../constants.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Subject<any> = new Subject()

  constructor(
    private http: HttpClient,
    private constantsService: ConstantsService
  ) {
    this.getContacts();
  }

  public getContacts = () => {
    this.http.get(`${this.constantsService.baseAppUrl}contacts`).subscribe(
      values => {
        this.contacts.next(values);
      },
      err => {
        console.log(err);
      }
    );
  }
}
