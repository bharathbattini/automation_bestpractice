import { test, expect } from '@playwright/test'
const { chromium } = require('playwright');

test.beforeEach('Setting up the Browser and Webpage', async () => {

    const browser = await chromium.launch();
    const page = await browser.newPage();
    // Your code here\
    await page.goto(String(process.env.BASEURL));

});

test.describe('CSS Locators Example', () => {

    test('Using Class Locators', async ({ page }) => {

        console.log('passed');

    });

});