import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recaptcha-demo',
  templateUrl: './recaptcha-demo.component.html',
  styleUrls: ['./recaptcha-demo.component.css']
})
export class RecaptchaDemoComponent implements OnInit {
  private resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  constructor() { }

  ngOnInit() {
  }

}
