import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'ba-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  withHeader = true;

  @Input()
  header: string;

  @Input()
  withClose = true;

  @Input()
  isOpened: boolean;

  @Input()
  withImage: boolean;

  @Input()
  image: string;

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  public isTablet: boolean;
  public isMobile: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = true;
          return;
        }
        this.isMobile = false;
        return;
      });
  }

  public onClose = () => {
    this.close.emit();
  }

}
