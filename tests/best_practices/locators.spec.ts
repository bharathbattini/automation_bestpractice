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

const SUBHEADERNAME = {

    ourStory: 'Our Story',
    ourQFA: 'Our QFA',
    events: 'Events',
    careers: 'Careers',
    community: 'Community',
    about: 'About',

} as const

test.describe('Example of using Best Locators on each element', () => {

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
