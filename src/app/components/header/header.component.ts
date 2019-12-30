import { Component, OnInit, Renderer2 } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'ba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMobile: boolean;

  public isOpened = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2
  ) { }

  onOpenMenu = () => {
    this.isOpened = true;
    this.renderer.addClass(document.body, 'modal-opened');
  }

  onCloseMenu = () => {
    this.isOpened = false;
    this.renderer.removeClass(document.body, 'modal-opened');
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 920px)'])
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
