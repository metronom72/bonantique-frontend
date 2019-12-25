import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ba-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input()
  images: string[];

  @Input()
  withArrows: boolean;

  @Input()
  initialCurrent = 0;

  @Input()
  autostart: boolean;

  current = this.initialCurrent

  selectCurrent = (current: number) => {
    this.current = current;
  }

  constructor() { }

  ngOnInit() { }

}
