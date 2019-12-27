import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'ba-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public phone = '+7 911 812 2653'

  public isMobile: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 820px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      });
  }

}
