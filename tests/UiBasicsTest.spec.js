const { test, expect } = require('@playwright/test');
const { waitForDebugger } = require('node:inspector');
const { Network } = require('node:inspector/promises');

//test('First Playwright Test', testfunction)

test.only('First Playwright Test', async ({ browser }) => {

    //playwright code
    // JavaScript is asynchronous - means thing will not be executed in sequence
    // await Step1 - Open Browser
    // await Step2 - Enter Username/Password
    // await Step3 - Click
    //Note : Fixtures are considered as a Global variable accross the playwright
    //Chrom - plugin/cookies


    const context = await browser.newContext();
    const page = await context.newPage();

    //Need to intialize after page have context
    const userName = page.locator('#username')
    const password = page.locator('[type ="password"]')
    const signInButton = page.locator('#signInBtn')

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await userName.fill('rahulshettyacademy') //fill('rahulshettyacademy')
    await password.fill('Learning@830$3mK') //.fill('Learning@830$3mK2')
    await signInButton.click()
    console.log(await page.locator("[style*='block']").textContent())
    // await expect(page.locator("[style*='block']")).toContainText('Incorrect hkjdhkjh')
    await password.fill("") //.fill('Learning@830$3mK2')
    await password.fill('Learning@830$3mK')
    await signInButton.click()


    //strict Mode Violation

    //******************************************************************************************** */
    //Page rediraction
    //console.log(await page.locator(".card-body a").first().textContent()); 
    await page.waitForLoadState('networkidle')   //important   flaky Test line 

    // alternet for networkidle wait state
    await page.locator(".card-body a").waitFor()
    // await page.locator(".card-body a").first().waitFor()
    // await page.locator(".card-body a").last().waitFor()

    const cardTitles = await page.locator(".card-body a")
    console.log(await cartTitles.nth(0).textContent());  //nth(1)
    console.log(await cartTitles.nth(1).textContent());
    const allTitiles = await cardTitles.allTextContents()
    console.log(allTitiles)



});

// test.only('First Playwright Test', async ({ page }) => {

//     await page.goto("https://www.google.com/");
//     console.log(await page.title());
//     await expect(page).toHaveTitle("Google")
// });