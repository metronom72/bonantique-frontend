import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ClarityModule } from '@clr/angular';
import { ContactsComponent } from './contacts/contacts.component';
import { TableComponent as ContactsTableComponent } from './contacts/table/table.component';
import { EditComponent as EditContactComponent } from './contacts/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent as EditCategoryComponent } from './categories/edit/edit.component';
import { BondsComponent } from './bonds/bonds.component';
import { TableComponent as BondsTableComponent } from './bonds/table/table.component';
import { EditComponent as EditBondComponent } from './bonds/edit/edit.component';


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
        component: EditContactComponent,
      },
      {
        path: 'categories/:slug/edit',
        component: EditCategoryComponent,
      },
      {
        path: 'bonds',
        component: BondsComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    ContactsComponent,
    ContactsTableComponent,
    EditContactComponent,
    EditCategoryComponent,
    BondsComponent,
    BondsTableComponent,
    EditBondComponent,
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
