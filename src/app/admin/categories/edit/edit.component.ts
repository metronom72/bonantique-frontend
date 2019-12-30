import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../common/services/categories.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Category } from '../../../common/category';

@Component({
  selector: 'ba-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [CategoriesService]
})
export class EditComponent implements OnInit {
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
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.init(this.categories);
      }
    });
    this.categoriesService.categories
      .subscribe(this.init);
  }

  private init = (categories: Category[]) => {
    console.log(categories);
    this.categories = categories;
    if (this.route.snapshot.params.slug === 'new') {
      this.type = 'new';
      this.categoryForm.reset({
        title: '',
        slug: '',
        active: true,
      });
    } else {
      this.type = 'edit';

      const category = categories.find(c => c.slug === this.route.snapshot.params.slug);
      if (category) {
        this.categoryForm.reset(category);
      } else {
        this.router.navigateByUrl('/admin');
      }
    }
  }

  onSubmit = () => {
    if (this.route.snapshot.params.slug !== 'new') {
      const category: Category = this.categories.find(c => c.slug === this.route.snapshot.params.slug);
      this.categoriesService.updateCategory(category.slug, this.categoryForm.value)
        .subscribe(
          (values: any) => {
            this.categoriesService.getCategories()
              .subscribe(
                (vals: { data: Category[] }) => {
                  this.categoriesService.categories.next(vals.data);
                }
              );
          },
          (errors: any) => {
            // pass
          }
        );
    } else {
      this.categoriesService.createCategory(this.categoryForm.value)
        .subscribe(
          (values: any) => {
            this.categoriesService.getCategories()
              .subscribe(
                (vals: { data: Category[] }) => {
                  this.categoriesService.categories.next(vals.data);
                }
              );;
          },
          (errors: any) => {
            // pass
          }
        );
    }
  }

}
