import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../common/category';

@Component({
  selector: 'ba-sidenav-catalog',
  templateUrl: './sidenav-catalog.component.html',
  styleUrls: ['./sidenav-catalog.component.scss']
})
export class SidenavCatalogComponent implements OnInit {

  @Input()
  categories: Category[] = [];

  constructor() { }

  ngOnInit() { }

}
