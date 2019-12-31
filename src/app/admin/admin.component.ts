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
    this.categoriesService.categories
      .subscribe(
        (categories: Category[]) => {
          this.categories = categories;
        }
      );
  }

}
