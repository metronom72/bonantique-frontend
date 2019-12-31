import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../common/category';

@Component({
  selector: 'ba-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input()
  paths: Category[] = []

  constructor() { }

  ngOnInit() { }

}
