import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  menu = [
    {
      label: 'Банкноты',
      link: 'catalog',
    },
    {
      label: 'Inspiration',
      link: '',
    },
    {
      label: 'Блог',
      link: '',
    },
    {
      label: 'Контакты',
      link: '',
    },
    {
      label: 'О Нас',
      link: '',
    },
  ]

  ngOnInit() { }

}
