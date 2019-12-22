import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'ba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMobile: boolean;

  public isOpened = false;

  constructor(public breakpointObserver: BreakpointObserver) { }

  onOpenMenu = () => {
    this.isOpened = true;
  }

  onCloseMenu = () => {
    this.isOpened = false;
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 820px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = true;
          this.onCloseMenu();
        } else {
          this.isMobile = false;
          this.onCloseMenu();
        }
      });
  }

}
