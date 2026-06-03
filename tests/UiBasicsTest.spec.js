const { test } = require('@playwright/test');

//test('First Playwright Test', testfunction)

test('First Playwright Test', async ({ browser, page }) => {

    //playwright code
    // JavaScript is asynchronous - means thing will not be executed in sequence
    // await Step1 - Open Browser
    // await Step2 - Enter Username/Password
    // await Step3 - Click
    //Note : Fixtures are considered as a Global variable accross the playwright
    //Chrom - plugin/cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    
});

test('First Playwright Test', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
});