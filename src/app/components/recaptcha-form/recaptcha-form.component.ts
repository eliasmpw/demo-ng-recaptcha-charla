import { Component, OnInit } from '@angular/core';

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-recaptcha-form',
  templateUrl: './recaptcha-form.component.html',
  styleUrls: ['./recaptcha-form.component.css']
})
export class RecaptchaFormComponent implements OnInit {
  private formModel: FormModel = {};

  private resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  private onSubmit() {
    console.log(`Form Model:`, this.formModel);
    // Submit logic
  }

  constructor() { }

  ngOnInit() {
  }

}
