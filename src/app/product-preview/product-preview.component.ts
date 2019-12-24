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
    expireAt: string
    cost: number
    previousCost: number
    image: string
  }

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
    console.log(this.product);
    if (!this.product || !this.product.expireAt) {
      return;
    }

    const current = new Date();
    const dateDiff = (new Date(this.product.expireAt) as any) - (current as any);
    const diff = dateDiff / (1000 * 60 * 60 * 24);
    const days = Math.abs(Math.floor(diff));
    const hours = Math.abs(Math.floor(24 * (diff - Math.floor(diff))));

    this.countdown = {days, hours};
  }

}
