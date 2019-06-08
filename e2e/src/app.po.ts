import { browser, by, element } from 'protractor'

export class AppPage {
  navigateTo() {
    browser.waitForAngularEnabled(true)
    return browser.get(browser.baseUrl) as Promise<any>
  }

  getTitleText() {
    return element(by.css('app-root mat-toolbar span')).getText() as Promise<string>
  }
}
