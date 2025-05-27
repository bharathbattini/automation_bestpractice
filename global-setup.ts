
// setup('test', async ({ page }) => {


// });

// import { test as setup, expect } from '@playwright/test';
// import path from 'path';

// const authFile = path.join(__dirname, '.auth/user.json');

// setup('authenticate', async ({ page }) => {
//     // Perform authentication steps. Replace these actions with your own.

//     await page.goto('https://newqa.eos.onefin.app/');
//     await page.getByRole('button', { name: 'Login with Google' }).click();
//     await page.getByLabel('Email or phone').fill('testuser2@1finance.co.in');
//     await page.getByRole('button', { name: 'Next' }).click();
//     await page.getByLabel('Enter your password').fill('1Finance@Testuser');
//     await page.getByRole('button', { name: 'Next' }).click();
//     await page.waitForTimeout(5000);
//     await page.locator('header.c-header').isVisible();

//     // End of authentication steps.
//     await page.context().storageState({ path: authFile });
// });


