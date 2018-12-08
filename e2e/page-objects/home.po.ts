import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPlayerLink() {
    return element(by.css('.navbar-nav > li:first-child a'));
  }
}
