import { browser, by, element } from 'protractor';

export class RecorderPage {
  navigateTo() {
    return browser.get('/ziggeo-recorder');
  }

  getHomeButton() {
    return element(by.css('a.navbar-brand'));
  }

  getParagraphText() {
    return element(by.css('app-root h5')).getText();
  }
}
