import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ba-table',
  templateUrl: './table.component.html',
  styleUrls: [
    './table.component.scss',
  ]
})
export class TableComponent implements OnInit {

  @Input()
  contacts: object[] = [];

  constructor() { }

  ngOnInit() { }

}
