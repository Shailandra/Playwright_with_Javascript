const { test, expect } = require('@playwright/test');
const { promises } = require('node:dns');

test('Test static select dropdown', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator('#username')
    const password = page.locator('[type ="password"]')

    const radio = page.locator('.radiotextsty')

    const dropdown = await page.locator('select.form-control')
    await dropdown.selectOption("consult")
    await page.waitForTimeout(3000);
    await dropdown.selectText('Teacher');
    await page.waitForTimeout(3000);
    //await radio.nth(1).check()
    await radio.last().check()

    //Web based Pop-up
    await page.locator('#okayBtn').click()

    //Assertion
    console.log(await expect(radio.last().isChecked()))
    console.log(expect(radio.last()).toBeChecked())

    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();

    await expect(page.locator("[href*='documents-request']")).toHaveAttribute("class", "blinkingText")
    page.pause()
});

test.only('Test static select dropdown', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator("[href*='documents-request']")
    //await expect(documentLink).toHaveAttribute("class", "blinkingText")

    const [newPage] = Promise.all(
        [
            context.waitForEvent('page'), //listen for any new page to open   Promis -> .pending, reject fulfilled
            documentLink.click() // new page is opening
        ]
    )

    const text = await newPage.locator('.red').textContent()


    //input value if need to grab the value from  editbox


});