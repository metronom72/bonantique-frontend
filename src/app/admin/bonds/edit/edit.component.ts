import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../../common/services/categories.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Bond } from '../../../common/bond';
import { Category } from '../../../common/category';

const newBond: Bond = {
  title: '',
  description: '',
  prices: [],
  available: true,
  amount: 1,
  product_type: 'bond',
  bond_currency: '',
  bond_value: '',
  bond_serial: '',
  bond_number: '',
  bond_country: '',
  is_copy: false,
  category_id: null,
}

@Component({
  selector: 'ba-edit-bonds',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class BondsEditComponent implements OnInit {
  public bondForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null),
    prices: new FormArray([], Validators.required),
    valid_till: new FormControl(''),
    amount: new FormControl(1, Validators.required),
    product_type: new FormControl('bond', Validators.required),
    bond_currency: new FormControl(null, Validators.required),
    bond_value: new FormControl(null, Validators.required),
    bond_serial: new FormControl(null, Validators.required),
    bond_number: new FormControl(null, Validators.required),
    bond_country: new FormControl(null, Validators.required),
    is_copy: new FormControl(false, Validators.required),
    category_id: new FormControl(null, Validators.required),
  });
  public type: string;
  public categories: Category[] = [];
  public bonds: Bond[] = [];

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

    if (this.route.snapshot.params.id === 'new') {
      this.type = 'new';

      await this.resetForm(newBond);
    } else {
      this.type = 'edit';

      await this.resetForm();
    }
  }

  onSubmit = () => {
    // if (this.route.snapshot.params.id !== 'new') {
    //   const bond: Bond = this.bonds.find((b: Bond) => b.id === this.route.snapshot.params.id);
    //   this.bondsService.updateBond(bond.id, this.bondForm.value)
    //     .subscribe(async () => {
    //       this.refreshBonds();
    //       await this.resetForm(newBond);
    //     });
    // } else {
    //   this.bondsService.createBond(this.bondForm.value)
    //     .subscribe(async () => {
    //       this.refreshBonds();
    //       await this.resetForm(newBond);
    //     });
    // }
  }

  private handleRoute = () => {
    this.router.events.subscribe(async event => {
      if (event instanceof NavigationEnd) {
        await this.init(this.categories);
      }
    });
  }

  private resetForm = async (value?: Bond) => {
    // if (value) {
    //   this.bondForm.reset(value);
    // } else {
    //   const bond = this.bondsService.bonds.find((b: Bond): boolean => c.id === this.route.snapshot.params.id);
    //   if (bond) {
    //     this.bondForm.reset(bond);
    //   } else {
    //     await this.router.navigateByUrl('/admin/bonds');
    //   }
    // }
  }

  private refreshBonds = () => {
    // this.bondsService.refresh();
  }

}
