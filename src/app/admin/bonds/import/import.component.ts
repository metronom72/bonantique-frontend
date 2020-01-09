import { Component, OnInit } from '@angular/core';
import { Bond } from '../../../common/bond';
import { BondsService } from '../../../common/services/bonds.service';
import { CategoriesService } from '../../../common/services/categories.service';
import { Category } from '../../../common/category';

@Component({
  selector: 'ba-bonds-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss'],
})
export class BondsImportComponent implements OnInit {

  bonds: Bond[] = [];
  toImport: Bond[] = [];
  categories: Category[] = [];

  constructor(
    private bondsService: BondsService,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit() {
    this.categories = this.categoriesService.categories;
    this.bonds = this.bondsService.bondsToImport;
  }

  private getCategory = (categoryId: number) => {
    return this.categories.find(category => category.id === categoryId);
  }

  private import = async () => {
    await (Promise.all(this.toImport.map(async (bond) => {
      await this.bondsService.createBond(bond);
    })));
  }
}
