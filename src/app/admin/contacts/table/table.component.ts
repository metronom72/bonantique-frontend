import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../../common/contact';

@Component({
  selector: 'ba-table',
  templateUrl: './table.component.html',
  styleUrls: [
    './table.component.scss',
  ]
})
export class TableComponent implements OnInit {

  @Input()
  contacts: Contact[] = [];

  constructor() { }

  ngOnInit() { }

}
