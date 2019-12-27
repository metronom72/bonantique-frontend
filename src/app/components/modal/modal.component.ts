import { Component, OnInit, Input, Output, EventEmitter, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'ba-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {

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

  public isMobile: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const { isOpened } = changes;
    if (isOpened) {
      if (isOpened.currentValue) {
        this.renderer.addClass(document.body, 'modal-opened');
      } else {
        this.renderer.removeClass(document.body, 'modal-opened');
      }
    }
  }

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
    this.renderer.removeClass(document.body, 'modal-opened');
  }

}
