import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(destination) {
    return browser.get(destination);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
