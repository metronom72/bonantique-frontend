import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ba-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  public subscribeForm;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit() {
    this.initForm();
  }

  public onSubmit = () => {
    const controls = this.subscribeForm.controls;

    if (this.subscribeForm.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());

      return;
    }
  }

  public isControlInvalid = (controlName: string): boolean => {
    const control = this.subscribeForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  private initForm = () => {
    this.subscribeForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
    });
  }

}
