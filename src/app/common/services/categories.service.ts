import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { Category } from '../category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  public categories: Category[] = [];
  public errors: Subject<any> = new Subject<any>();
  public initialize: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private constantsService: ConstantsService
  ) {
    this.initialize.next(false);
    this.getCategories()
      .subscribe(
        (values: {data: Category[]}) => {
          this.categories = values.data;
          this.errors.next(null);
          this.initialize.next(true);
        },
        (errors: {errors: object[]}) => {
          this.categories = [];
          this.errors.next(errors.errors);
          this.initialize.next(true);
        }
      );
  }

  public refresh = () => {
    this.getCategories()
      .subscribe(
        (values: {data: Category[]}) => {
          this.categories = values.data;
          this.initialize.next(true);
          this.errors.next(null);
        },
        (errors: {errors: object[]}) => {
          this.categories = [];
          this.initialize.next(true);
          this.errors.next(errors.errors);
        }
      );
  }

  public createCategory = (category: Category) => {
    this.errors.next(null);
    return this.http.post(`${this.constantsService.baseAppUrl}admin/categories`, { new_category: category });
  }

  public updateCategory = (id: string | number, category: Category) => {
    this.errors.next(null);
    return this.http.patch(`${this.constantsService.baseAppUrl}admin/categories/${id}`, { category });
  }

  public getCategories = () => {
    this.errors.next(null);
    return this.http.get(`${this.constantsService.baseAppUrl}admin/categories`);
  }
}
