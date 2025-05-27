import { test, expect } from '@playwright/test';

test.describe('Selector ID in different method', () => {

    test.beforeEach('Setting up the browser', async ({ browser }) => {

        const context = await browser.newContext({ storageState: '.auth/user.json' });
        const page = await context.newPage();
        await page.getByAltText('login').click();

    })

    test('ID with #', () => {



    });

})