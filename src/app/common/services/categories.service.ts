import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { Category } from '../category';

@Injectable()
export class CategoriesService {
  public categories: Subject<Category[]> = new Subject<Category[]>();
  public errors: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient,
    private constantsService: ConstantsService
  ) {
    this.getCategories()
      .subscribe(
        (values: {data: Category[]}) => {
          this.categories.next(values.data);
          this.errors.next(null);
        },
        (errors: {errors: object[]}) => {
          this.categories.next([]);
          this.errors.next(errors.errors);
        }
      );
  }

  public createCategory = (category: Category) => {
    this.errors.next(null);
    return this.http.post(`${this.constantsService.baseAppUrl}admin/categories`, { new_category: category });
  }

  public updateCategory = (id: string, category: Category) => {
    this.errors.next(null);
    return this.http.patch(`${this.constantsService.baseAppUrl}admin/categories/${id}`, { category });
  }

  public getCategories = () => {
    this.errors.next(null);
    return this.http.get(`${this.constantsService.baseAppUrl}admin/categories`);
  }
}