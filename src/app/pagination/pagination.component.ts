import { Component, Input, OnInit } from '@angular/core';

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

  public hasPrevious: boolean;
  public hasNext: boolean;
  public hasRest: boolean;
  public rest: number[];

  constructor() { }

  ngOnInit() { }

}
