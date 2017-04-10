import { Page } from './page.model';

describe('App', function () {
    let page: Page;

    beforeEach(() => {
        page = new Page();
        page.navigateTo();
    });
});
