import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ba-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PacksListComponent implements OnInit {

  @Input()
  paths: string[] = ['КАТАЛОГ', 'НАБОРЫ БАНКНОТ'];

  constructor() { }

  ngOnInit() { }

}
