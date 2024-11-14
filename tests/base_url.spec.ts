import { test, expect } from '@playwright/test';

test.describe('Config the Base URL using .env', () => {

    test('Open the 1 Finance Base URL', async ({ page }) => {

        console.log(process.env.BASEURL);
        await page.goto(String(process.env.BASEURL));
        await page.locator('#toggleSubmenu').hover();
    });

    test.afterEach(async ({ page }) => {
        console.log(`Finished ${test.info().title} with status ${test.info().status}`);

        if (test.info().status !== test.info().expectedStatus)
            console.log(`Did not run as expected, ended up at ${page.url()}`);
    });

});
