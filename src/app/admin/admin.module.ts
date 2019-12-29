import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ClarityModule } from '@clr/angular';
import { ContactsComponent } from './contacts/contacts.component';
import { TableComponent } from './contacts/table/table.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'contacts',
        component: ContactsComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    ContactsComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ClarityModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class AdminModule { }
