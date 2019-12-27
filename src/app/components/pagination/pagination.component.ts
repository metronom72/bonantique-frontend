import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'ba-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input()
  currentPage: number;

  @Input()
  totalPages: number;

  @Input()
  firstPage: number;

  @Output()
  nextPage: EventEmitter<any> = new EventEmitter();

  @Output()
  previousPage: EventEmitter<any> = new EventEmitter();

  @Output()
  selectPage: EventEmitter<any> = new EventEmitter();

  public hasPrevious: boolean;
  public hasNext: boolean;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculate(changes);
  }

  private calculate = (changes: SimpleChanges) => {
    const {
      currentPage,
    } = changes;

    if (currentPage) {
      if (currentPage.currentValue === this.firstPage) {
        this.hasPrevious = false;
      } else {
        this.hasPrevious = true;
      }

      if (currentPage.currentValue === this.totalPages) {
        this.hasNext = false;
      } else {
        this.hasNext = true;
      }
    }
  }

  public onNext = () => {
    this.nextPage.emit();
  }

  public onPrevious = () => {
    this.previousPage.emit();
  }

  public onSelect = (page: number) => {
    this.selectPage.emit(page);
  }

}
