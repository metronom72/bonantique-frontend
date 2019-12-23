import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public phone = '+7 911 812 2653'

  constructor() { }

  ngOnInit() { }

}
