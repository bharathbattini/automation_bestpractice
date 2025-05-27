import { test, expect } from '@playwright/test';

test.beforeEach('Go to the BaseURL', async ({ page }) => {

    await page.goto(String(process.env.BASEURL));

});

test.describe('Example of using Best Locators on each element', () => {

    test('How to Use ID in the Locator to find the element', async ({ page }) => {

        


    });




});
