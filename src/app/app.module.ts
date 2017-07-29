import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppComponent } from './app.component';
import { RecaptchaDemoComponent } from './components/recaptcha-demo/recaptcha-demo.component';
import { RecaptchaFormComponent } from './components/recaptcha-form/recaptcha-form.component';
import { RecaptchaInvisibleComponent } from './components/recaptcha-invisible/recaptcha-invisible.component';

@NgModule({
  declarations: [
    AppComponent,
    RecaptchaDemoComponent,
    RecaptchaFormComponent,
    RecaptchaInvisibleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RecaptchaFormsModule,
    RecaptchaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
