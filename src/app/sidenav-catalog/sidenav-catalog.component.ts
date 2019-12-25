import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ba-sidenav-catalog',
  templateUrl: './sidenav-catalog.component.html',
  styleUrls: ['./sidenav-catalog.component.scss']
})
export class SidenavCatalogComponent implements OnInit {

  @Input()
  categories: Array<{label: string, link: string}> = [];

  constructor() { }

  ngOnInit() { }

}
