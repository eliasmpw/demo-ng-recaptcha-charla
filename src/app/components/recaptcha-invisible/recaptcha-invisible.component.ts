import { Component, OnInit } from '@angular/core';

export interface FormModel {
  captcha?: string;
}
@Component({
  selector: 'app-recaptcha-invisible',
  templateUrl: './recaptcha-invisible.component.html',
  styleUrls: ['./recaptcha-invisible.component.css']
})
export class RecaptchaInvisibleComponent implements OnInit {
  private formModel: FormModel = {};

  private resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    console.log(`Form Model:`, this.formModel);
    // Submit logic
  }

  private onSubmit() {
    console.log(this.formModel);
  }

  constructor() { }

  ngOnInit() {
  }
}
