import { ReCAPTCHADemoPage } from './app.po';

describe('re-captchademo App', () => {
  let page: ReCAPTCHADemoPage;

  beforeEach(() => {
    page = new ReCAPTCHADemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
