import { test, expect } from '@playwright/test';

test.describe('Config the Base URL using .env', () => {

    test('Open the 1 Finance Base URL', async ({ page }) => {
        console.log(process.env.BASEURL);
        await page.goto(String(process.env.BASEURL));
        await expect(page).toHaveURL(String(process.env.BASEURL));
    });

});
