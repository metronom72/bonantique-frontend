import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../../common/contact';

@Component({
  selector: 'ba-table-contacts',
  templateUrl: './table.component.html',
  styleUrls: [
    './table.component.scss',
  ]
})
export class ContactsTableComponent implements OnInit {

  @Input()
  contacts: Contact[] = [];

  constructor() { }

  ngOnInit() { }

}
