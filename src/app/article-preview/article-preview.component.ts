import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ba-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {

  @Input()
  article: {
    title: string
    link: string
    author: string,
    createdAt: string,
    preview: string,
  };

  constructor() { }

  ngOnInit() { }

}
