const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');

test("End to End Automation Learning", async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()


    const productName = 'ZARA COAT 3';
    const email = 'rathore.shanu1996@yopmail.com'

    page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    const userName = page.locator('#userEmail')
    const password = page.locator('[type*="password"]')
    const signInBtn = page.locator('#login')

    await userName.fill(email)
    await password.fill('Sh@nu25895')
    await signInBtn.click()

    await page.waitForLoadState('networkidle');
    await page.locator('.card-body').first().waitFor()

    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles)
    const products = page.locator('.card-body');
    const count = await products.count();
    for (let i = 0; i < count; i++) {
        const product = await products.nth(i).locator('b').textContent();
        console.log(product)
        if (product === productName) {
            await products.nth(i).locator('text = Add To Cart').click()
            break;
        }
    }

    await page.locator('[routerlink *= cart]').click();
    // await page.waitForLoadState('networkidle');

    await page.locator('div li').first().waitFor()
    const bool = await page.locator(`h3:has-text("${productName}")`).isVisible();
    expect(bool).toBeTruthy();

    await page.locator("text=Checkout").click()

    await page.locator("//input[@placeholder='Select Country']").pressSequentially("ind")

    const dropdown = await page.locator('.ta-results');
    await dropdown.waitFor()
    const optionCount = await dropdown.locator('button').count();
    console.log(optionCount)

    for (let i = 0; i < optionCount; i++) {
        let text = await dropdown.locator('button').nth(i).textContent()
        if (text.trim() === 'India') {
            console.log(text)
            await dropdown.locator('button').nth(i).click()
            break;
        }

    }


    await expect(page.locator("label[type='text']").first()).toHaveText('rathore.shanu1996@yopmail.com')
    //await page.locator("//input[@class='input txt text-validated ng-pristine ng-valid ng-touched']")
    await page.locator('a:has-text("PLACE ORDER")').click()




    await page.pause()

})