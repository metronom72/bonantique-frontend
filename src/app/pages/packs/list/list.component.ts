import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { generate } from 'rxjs';

const generateProduct = () => ({
  title: 'Хрущевские фантики',
  expireAt: new Date('01-12-2020').getTime(),
  cost: 10000,
  previousCost: 12000,
  image: 'https://i.pinimg.com/564x/b2/f5/37/b2f537117590dc580fa6bcaf654bb808.jpg',
});

@Component({
  selector: 'ba-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PacksListComponent implements OnInit {

  paths: Array<{label: string, link: string}> = [{
    label: 'КАТАЛОГ',
    link: ''
  }, {
    label: 'НАБОРЫ БАНКНОТ',
    link: ''
  }];

  categories: Array<{label: string, link: string}> = [
    {
      label: 'БАНКНОТЫ ЦАРСКОЙ РОССИИ',
      link: '',
    }, {
      label: 'БАНКНОТЫ РСФСР',
      link: '',
    }, {
      label: 'БАНКНОТЫ СССР',
      link: '',
    }
  ];

  products = [
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
    generateProduct(),
  ]

  public isTablet: boolean;
  public isMobile: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 1024px)', '(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          if (state.breakpoints['(max-width: 1024px)'] && state.breakpoints['(max-width: 768px)']) {
            this.isTablet = false;
            this.isMobile = true;
          } else if (!state.breakpoints['(max-width: 768px)'] && state.breakpoints['(max-width: 1024px)']) {
            this.isTablet = true;
            this.isMobile = false;
          }
        } else {
          this.isTablet = false;
          this.isMobile = false;
        }
      });
  }

}
