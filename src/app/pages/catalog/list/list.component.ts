import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { generate } from 'rxjs';
import { CategoriesService } from '../../../common/services/categories.service';
import { Category } from '../../../common/category';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { first } from 'rxjs/operators';

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

  paths: Category[] = [];

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.setCategories();

    this.categoriesService.initialize
      .subscribe(value => {
        if (value) {
          this.setCategories();
        }
      });

    this.breakpointObserver
      .observe(['(max-width: 1280px)', '(max-width: 900px)'])
      .subscribe((state: BreakpointState): void => {
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

    this.activatedRoute.params.subscribe((params: Params): void => {
      if (params.category) {
        this.setBreadcrumbs(params);
      }
    });
  }

  public onNextPage = (): void => {
    if (this.currentPage === this.totalPages) {
      return;
    }
    this.currentPage = this.currentPage + 1;
  }

  public onPreviousPage = (): void => {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage = this.currentPage - 1;
  }

  public onSelectPage = (page: number): void => {
    if (page === this.currentPage) {
      return;
    }
    this.currentPage = page;
  }

  private setBreadcrumbs = (routeParams: Params): void => {
    const currentCategory = this.categoriesService.categories.find((category: Category) =>
      category.slug === routeParams.category);
    if (currentCategory) {
      if (currentCategory.parent_category_id) {
        const parentCategory = this.categoriesService.categories.find((category: Category) =>
          category.id === currentCategory.parent_category_id);
        if (parentCategory) {
          this.paths = [parentCategory, currentCategory];
        } else {
          this.paths = [currentCategory];
        }
      } else {
        this.paths = [currentCategory];
      }
    }
  }

  private setCategories = (): void => {
    const parentCategory = this.categoriesService.categories.find(category => category.slug === 'banknotes');
    this.categories = this.categoriesService.categories.filter(category => category.parent_category_id === parentCategory.id);
  }

}
