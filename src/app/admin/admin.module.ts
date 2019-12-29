import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ClarityModule } from '@clr/angular';
import { ContactsComponent } from './contacts/contacts.component';
import { TableComponent } from './contacts/table/table.component';
import { EditComponent as EditContactComponent } from './contacts/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    ]
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    ContactsComponent,
    TableComponent,
    EditContactComponent,
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
