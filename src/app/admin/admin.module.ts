import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ClarityModule } from '@clr/angular';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsTableComponent } from './contacts/table/table.component';
import { ContactsEditComponent } from './contacts/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesEditComponent } from './categories/edit/edit.component';
import { BondsComponent } from './bonds/bonds.component';
import { BondsTableComponent } from './bonds/table/table.component';
import { BondsEditComponent } from './bonds/edit/edit.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'contacts/:id/edit',
        component: ContactsEditComponent,
      },
      {
        path: 'categories/:slug/edit',
        component: CategoriesEditComponent,
      },
      {
        path: 'bonds',
        component: BondsComponent,
      },
      {
        path: 'bonds/:id/edit',
        component: BondsEditComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    ContactsComponent,
    ContactsTableComponent,
    ContactsEditComponent,
    CategoriesEditComponent,
    BondsComponent,
    BondsTableComponent,
    BondsEditComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ClarityModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class AdminModule { }
