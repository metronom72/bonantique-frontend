import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'ba-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit, OnDestroy {

  @Input()
  product: {
    title: string
    expireAt: number
    cost: number
    previousCost: number
    image: string
  };

  countdown: {days: number, hours: number} | null = null;
  countdownId;

  constructor() { }

  ngOnInit() {
    this.startCountdown();
    this.countdownId = setInterval(this.startCountdown, 1000 * 60);
  }

  ngOnDestroy() {
    if (this.countdownId) {
      clearInterval(this.countdownId);
    }
  }

  startCountdown = () => {
    if (!this.product || !this.product.expireAt) {
      return;
    }

    const current = new Date().getTime();
    const dateDiff = this.product.expireAt - current;
    console.log(this.product.expireAt, current, dateDiff)
    if (dateDiff > 0) {
      const diff = dateDiff / (1000 * 60 * 60 * 24);
      const days = Math.floor(diff);
      const hours = Math.floor(24 * (diff - days));

      this.countdown = {days, hours};
    }
  }

}
