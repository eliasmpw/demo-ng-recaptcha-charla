import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaptchaDemoComponent } from './recaptcha-demo.component';

describe('RecaptchaDemoComponent', () => {
  let component: RecaptchaDemoComponent;
  let fixture: ComponentFixture<RecaptchaDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecaptchaDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaptchaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
