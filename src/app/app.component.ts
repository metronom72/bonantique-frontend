import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  public title = 'Bon Antique';
  public isAdmin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
