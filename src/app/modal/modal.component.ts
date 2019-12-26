import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public onClose = () => {
    this.close.emit();
  }

}
