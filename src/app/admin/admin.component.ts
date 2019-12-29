import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './common/services/categories.service';

@Component({
  selector: 'ba-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [CategoriesService]
})
export class AdminComponent implements OnInit {

  categories: object[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.categories
      .subscribe(
        categories => {
          this.categories = categories;
        }
      );
  }

}
