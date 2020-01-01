import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from './common/services/contacts.service';
import { CategoriesService } from './common/services/categories.service';

@Component({
  selector: 'ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  public title = 'Bon Antique';
  public isAdmin = false;

  public contactsLoaded = false;
  public categoriesLoaded = false;

  public get loaded() {
    return this.contactsLoaded && this.categoriesLoaded;
  }

  constructor(
    private contactsService: ContactsService,
    private categoriesService: CategoriesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.contactsService.initialize
      .subscribe((value: boolean) => {
        this.contactsLoaded = value;
        console.log(value);
      })

    this.categoriesService.initialize
      .subscribe((value: boolean) => this.categoriesLoaded = value)

    this.router.events.subscribe(
      (event: any) => {
        if (event.url) {
          if (/^\/admin/.test(event.url)) {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }
        }
      }
    );
  }
}
