import { test, expect } from '@playwright/test';

test.describe('Check the FC Dashboard page is visible and working', () => {

    test('Check the Greetings Text is visible', async ({ browser }) => {
       
        const context = await browser.newContext({ storageState: '.auth/user.json' });
        const page = await context.newPage();
        await page.goto('https://newqa.eos.onefin.app/dashboard');
        await page.waitForTimeout(5000);
        const headerText = await page.locator('header.c-header').isVisible();


    });

});
