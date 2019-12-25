import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { ConstantsService } from '../common/services/constants.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'ba-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  public subscribeForm;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private constants: ConstantsService) { }

  public ngOnInit() {
    this.initForm();
  }

  public onSubmit = () => {
    const controls = this.subscribeForm.controls;

    if (this.subscribeForm.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

    this.subscribeEmail();
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

  private subscribeEmail = () => {
    console.log(this.subscribeForm)
    this.httpClient.post(`${this.constants.baseAppUrl}subscribe`, {email: this.subscribeForm.value.email})
      .subscribe(
        (val) => {
          console.log(val);
        },
        (error) => {
          this.subscribeForm.setErrors({api: error.error.email[0]});
        },
      );
  }

}
