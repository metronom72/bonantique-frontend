import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public type: 'VERTICAL' | 'HORIZONTAL';
  public header: string | null;
  public subheader: string | null;
  public raw: string | null;
  public frontImage: string | null;
  public link: string;
  private id: string;

  constructor() { }

  ngOnInit() { }

}
