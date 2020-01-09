import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../../common/services/categories.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Bond } from '../../../common/bond';
import { Category } from '../../../common/category';
import { BondsService } from '../../../common/services/bonds.service';

const newBond: Bond = {
  title: '',
  description: '',
  prices: [],
  available: true,
  amount: 1,
  product_type: 'bond',
  bond_currency: '',
  bond_value: '',
  bond_country: '',
  is_copy: false,
  category_ids: null,
  quality: '',
};

@Component({
  selector: 'ba-edit-bonds',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class BondsEditComponent implements OnInit {
  public bondForm = new FormGroup({
    title: new FormControl(null, Validators.required), // +
    description: new FormControl(null), // +
    prices: new FormControl([], Validators.required), // +
    valid_till: new FormControl(''), // -
    amount: new FormControl(1, Validators.required), // +
    product_type: new FormControl({value: 'bond', disabled: true}, Validators.required), // +
    bond_currency: new FormControl(null, Validators.required), // +
    bond_value: new FormControl(null, Validators.required), // +
    bond_serial: new FormControl(null), // +
    bond_number: new FormControl(null), // +
    bond_country: new FormControl(null, Validators.required), // +
    is_copy: new FormControl(false, Validators.required), // +
    available: new FormControl(true, Validators.required), // +
    category_ids: new FormControl([], Validators.required), // -
    _price: new FormControl(null), // +
  });
  public type: string;
  public categories: Category[] = [];
  public bonds: Bond[] = [];

  constructor(
    private bondsService: BondsService,
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

    if (this.route.snapshot.params.id === 'new') {
      this.type = 'new';

      await this.resetForm(newBond);
    } else {
      this.type = 'edit';

      await this.resetForm();
    }
  }

  onSubmit = () => {
    if (this.route.snapshot.params.id !== 'new') {
      const bond: Bond = this.bonds.find((b: Bond) => b.id === this.route.snapshot.params.id);
      this.bondsService.updateBond(bond.id, this.bondForm.value)
        .subscribe(async () => {
          this.refreshBonds();
          await this.resetForm(newBond);
        });
    } else {
      this.bondsService.createBond(this.bondForm.value)
        .subscribe(async () => {
          this.refreshBonds();
          await this.resetForm(newBond);
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

  private resetForm = async (value?: Bond) => {
    if (value) {
      this.bondForm.reset(value);
    } else {
      const bond = this.bondsService.bonds.find((b: Bond): boolean => b.id === this.route.snapshot.params.id);
      if (bond) {
        this.bondForm.reset(bond);
      } else {
        await this.router.navigateByUrl('/admin/bonds');
      }
    }
  }

  private refreshBonds = () => {
    this.bondsService.refresh();
  }

  private addPrice = ($event: KeyboardEvent) => {
    if ($event.charCode !== 13) {
      return;
    }
    const price = ($event.target as HTMLInputElement).value;
    if (!price || this.bondForm.controls.prices.value.includes(price)) {
      return;
    }
    this.bondForm.controls._price.patchValue('');
    this.bondForm.controls.prices.patchValue([...this.bondForm.value.prices, price]);
  }

  private removePrice = (price: number) => {
    if (!this.bondForm.controls.prices.value.includes(price)) {
      return;
    }
    this.bondForm.controls.prices.patchValue(this.bondForm.value.prices.filter(p => p !== price));
  }

  private addCategory = (event) => {
    if (!event.target.value) {
      return;
    }
    const categoryId = parseInt(event.target.value, 10);
    if (this.bondForm.controls.category_ids.value.includes(categoryId)) {
      return;
    }
    this.bondForm.controls.category_ids.patchValue([...this.bondForm.value.category_ids, categoryId]);
  }

  private removeCategory = (categoryId: number) => {
    if (!this.bondForm.controls.category_ids.value.includes(categoryId)) {
      return;
    }
    this.bondForm.controls.category_ids.patchValue(this.bondForm.value.category_ids.filter(c => c !== categoryId));
  }

  private getCategory = (categoryId: number) => {
    return this.categories.find(category => category.id === categoryId);
  }

}
