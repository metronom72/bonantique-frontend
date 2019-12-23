import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ba-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  public subscribeForm;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.subscribeForm = this.formBuilder.group({
      email: '',
    });
  }

  ngOnInit() { }

}
