import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaptchaFormComponent } from './recaptcha-form.component';

describe('RecaptchaFormComponent', () => {
  let component: RecaptchaFormComponent;
  let fixture: ComponentFixture<RecaptchaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecaptchaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaptchaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
