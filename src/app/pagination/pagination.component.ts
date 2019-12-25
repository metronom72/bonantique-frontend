import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ba-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input()
  currentPage: number;

  @Input()
  totalPages: number;

  @Input()
  firstPage: number;

  @Output()
  next: EventEmitter<any> = new EventEmitter();

  @Output()
  previous: EventEmitter<any> = new EventEmitter();

  @Output()
  select: EventEmitter<any> = new EventEmitter();

  public hasPrevious: boolean;
  public hasNext: boolean;
  public hasRest: boolean;
  public rest: number[];

  constructor() { };

  ngOnInit() { };

  onNext = () => {
    this.next.emit();
  };
  onPrevious = () => {
    this.previous.emit();
  };
  onSelect = (page: number) => {
    this.select.emit(page);
  }

}
