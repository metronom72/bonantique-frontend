import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ba-review-preview',
  templateUrl: './review-preview.component.html',
  styleUrls: ['./review-preview.component.scss']
})
export class ReviewPreviewComponent implements OnInit {

  @Input()
  review: {
    images: string[]
    avatar: string
    name: string
    title: string
    review: string
  };

  constructor() { }

  ngOnInit() { }

}
