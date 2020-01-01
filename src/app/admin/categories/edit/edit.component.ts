import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../common/services/categories.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Category } from '../../../common/category';

const newCategory: Category = {
  title: '',
  slug: '',
  active: true,
}

@Component({
  selector: 'ba-edit-categories',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class CategoriesEditComponent implements OnInit {
  public categoryForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    slug: new FormControl(null, Validators.required),
    parent_category_id: new FormControl(null),
    active: new FormControl(true, Validators.required),
  });
  public type: string;
  public categories: Category[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.handleRoute();
    this.categories = this.categoriesService.categories;
  }

  private init = async (categories: Category[]) => {
    this.categories = categories;

    if (this.route.snapshot.params.slug === 'new') {
      this.type = 'new';

      await this.resetForm(newCategory);
    } else {
      this.type = 'edit';

      await this.resetForm();
    }
  }

  onSubmit = () => {
    if (this.route.snapshot.params.slug !== 'new') {
      const category: Category = this.categories.find(c => c.slug === this.route.snapshot.params.slug);
      this.categoriesService.updateCategory(category.slug, {
        ...this.categoryForm.value,
        parent_category_id: parseInt(this.categoryForm.value.parent_category_id, 10),
      })
        .subscribe(() => {
          this.refreshCategories();
          this.resetForm(newCategory);
        });
    } else {
      this.categoriesService.createCategory({
        ...this.categoryForm.value,
        parent_category_id: parseInt(this.categoryForm.value.parent_category_id, 10)
      })
        .subscribe(() => {
          this.refreshCategories();
          this.resetForm(newCategory);
        });
    }
  }

  private handleRoute = () => {
    this.router.events.subscribe(async event => {
      if (event instanceof NavigationEnd) {
        await this.init(this.categories);
      }
    });
  }

  private resetForm = async (value?: Category) => {
    if (value) {
      this.categoryForm.reset(value);
    } else {
      const category = this.categoriesService.categories.find((c: Category): boolean => c.slug === this.route.snapshot.params.slug);
      if (category) {
        this.categoryForm.reset(category);
      } else {
        await this.router.navigateByUrl('/admin');
      }
    }
  }

  private refreshCategories = () => this.categoriesService.refresh();

}
