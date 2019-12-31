import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { generate } from 'rxjs';
import { CategoriesService } from '../../../common/services/categories.service';
import { Category } from '../../../common/category';

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
    link: null
  }, {
    label: 'НАБОРЫ БАНКНОТ',
    link: 'list'
  }];

  categories: Category[] = [];

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
  ];

  public currentPage = 1;
  public totalPages = 3;

  public isTablet: boolean;
  public isMobile: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit() {
    this.categoriesService.categories
      .subscribe((categories: Category[]) => {
        const parentCategory = categories.find(category => category.slug === 'banknotes');
        this.categories = categories.filter(category => category.parent_category_id === parentCategory.id);
      })
    this.breakpointObserver
      .observe(['(max-width: 1280px)', '(max-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          if (state.breakpoints['(max-width: 1280px)'] && state.breakpoints['(max-width: 900px)']) {
            this.isTablet = false;
            this.isMobile = true;
          } else if (!state.breakpoints['(max-width: 900px)'] && state.breakpoints['(max-width: 1280px)']) {
            this.isTablet = true;
            this.isMobile = false;
          }
        } else {
          this.isTablet = false;
          this.isMobile = false;
        }
      });
  }

  onNextPage = () => {
    if (this.currentPage === this.totalPages) {
      return;
    }
    this.currentPage = this.currentPage + 1;
  }

  onPreviousPage = () => {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage = this.currentPage - 1;
  }

  onSelectPage = (page: number) => {
    if (page === this.currentPage) {
      return;
    }
    this.currentPage = page;
  }

}
