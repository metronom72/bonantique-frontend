import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ba-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input()
  paths: Array<{
    label: string
    link: string
  }>

  constructor() { }

  ngOnInit() { }

}