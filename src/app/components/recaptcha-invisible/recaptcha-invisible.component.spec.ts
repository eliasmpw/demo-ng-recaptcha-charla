import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaptchaInvisibleComponent } from './recaptcha-invisible.component';

describe('RecaptchaInvisibleComponent', () => {
  let component: RecaptchaInvisibleComponent;
  let fixture: ComponentFixture<RecaptchaInvisibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecaptchaInvisibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaptchaInvisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
