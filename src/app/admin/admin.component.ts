import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../common/services/categories.service';
import { Category } from '../common/category';

@Component({
  selector: 'ba-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categories = this.categoriesService.categories;

    this.categoriesService.initialize.subscribe((value: boolean): void => {
      if (value) {
        this.categories = this.categoriesService.categories;
      }
    });
  }

}
