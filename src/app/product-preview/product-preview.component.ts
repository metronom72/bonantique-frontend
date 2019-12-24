import { Component, Input, OnInit } from '@angular/core';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'ba-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  @Input()
  product: {
    title: string
    expireAt: DateTimeFormat
    cost: number
    previousCost: number
    image: string
  }

  constructor() { }

  ngOnInit() { }

}
