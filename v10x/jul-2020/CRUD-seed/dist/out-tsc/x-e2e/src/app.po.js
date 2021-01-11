import { browser, by, element } from 'protractor';
export class AppPage {
    // tslint:disable-next-line: no-any
    navigateTo() {
        // tslint:disable-next-line: no-any
        return browser.get(browser.baseUrl);
    }
    getTitleText() {
        return element(by.css('app-root .content span')).getText();
    }
}
//# sourceMappingURL=app.po.js.map