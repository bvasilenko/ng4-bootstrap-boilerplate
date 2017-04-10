import { browser, element, by } from 'protractor';

export class Page {
    navigateTo() {
        return browser.get('/');
    }
}
