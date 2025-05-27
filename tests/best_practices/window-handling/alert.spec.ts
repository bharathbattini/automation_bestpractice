import { test, expect } from '@playwright/test';

test.describe('Dialogs in Playwright', async () => {

    test.use(() => {

        viewport: null
    });

    test('Alert Dialog handling in Playwright', async ({ browser }) => {

        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html');

        page.on('dialog', dialog => console.log(dialog.message()));
        await page.locator('#alertexamples').click();

        await page.pause();
    });


});