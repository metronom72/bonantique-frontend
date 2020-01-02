import { Injectable } from '@angular/core';
import { Category } from '../category';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { Bond } from '../bond';

@Injectable({
  providedIn: 'root'
})
export class BondsService {
  public bonds: Bond[] = [];
  public errors: Subject<any> = new Subject<any>();
  public initialize: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private constantsService: ConstantsService
  ) {
    this.initialize.next(false);
    this.getBonds()
      .subscribe(
        (values: {data: Bond[]}) => {
          this.bonds = values.data;
          this.errors.next(null);
          this.initialize.next(true);
        },
        (errors: {errors: object[]}) => {
          this.bonds = [];
          this.errors.next(errors.errors);
          this.initialize.next(true);
        }
      );
  }

  public refresh = () => {
    this.getBonds()
      .subscribe(
        (values: {data: Bond[]}) => {
          this.bonds = values.data;
          this.initialize.next(true);
          this.errors.next(null);
        },
        (errors: {errors: object[]}) => {
          this.bonds = [];
          this.initialize.next(true);
          this.errors.next(errors.errors);
        }
      );
  }

  public createBond = (bond: Bond) => {
    this.errors.next(null);
    return this.http.post(`${this.constantsService.baseAppUrl}admin/bonds`, { new_bond: bond });
  }

  public updateBond = (id: string | number, bond: Bond) => {
    this.errors.next(null);
    return this.http.patch(`${this.constantsService.baseAppUrl}admin/bonds/${id}`, { bond });
  }

  public getBonds = (admin = false) => {
    this.errors.next(null);
    if (admin) {
      return this.http.get(`${this.constantsService.baseAppUrl}admin/bonds`);
    }
    return this.http.get(`${this.constantsService.baseAppUrl}bonds`);
  }
}
