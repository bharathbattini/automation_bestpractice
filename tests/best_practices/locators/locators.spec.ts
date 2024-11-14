import { test, expect } from '@playwright/test';

test.beforeEach('', async ({ page }) => {

    await page.goto(String(process.env.BASEURL));

});

const HEADERNAME = {

    calculators: 'Calculators',
    scoringAndRanking: 'Scoring & Ranking',
    moneySign: 'MoneySign®',
    blogs: 'Blogs',
    community: 'Community',
    about: 'About',

} as const


test.describe('Example of using Best Locators on each element', () => {

    test('Link', async ({ page }) => {

        console.log('Link');

    });

    test('CSS', async ({ page }) => {

        page.locator('div > svg.logo').click();


    });

    test('ID', async ({ page }) => {

        page.getByAltText('twitter');
        page.getByAltText('linkedin');
        page.getByAltText('instagram');
        page.getByAltText('youtube');
        page.getByAltText('facebook');
    });

    test('xpath', async ({ page }) => {

        console.log('XPATH');


    });

    test('Button with Text', async ({ page }) => {

        await page.getByRole('button', { name: "Download the app" }).click();

    });
    test('Check the Title of Page', async ({ page }) => {

        let titleName = 'Personal Financial Management & Planning - Best Personal Finance Advisory in India | 1 Finance';

        await expect(page).toHaveTitle(titleName);

    });

    test('To check the Headers are clickable', async ({ page }) => {

        await page.getByText(HEADERNAME.calculators).click();
        await expect(page).toHaveURL('calculator');
        await page.getAttribute(HEADERNAME.about, '2000');

    });

});
