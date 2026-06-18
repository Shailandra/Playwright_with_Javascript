//Login -> Storage State -> .json
//test, cart,order, orderdetail, ordrehistory


const { test, expect } = require('@playwright/test')
let webContext;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator("#userEmail").fill("rathore.shanu1996@yopmail.com");
    await page.locator("#userPassword").type("Sh@nu25895");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');

    await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({ storageState: 'state.json' });
})

test('End to end Automation', async () => {


    const productName = 'ZARA COAT 3';
    //const email = 'rathore.shanu1996@yopmail.com'

    const page = await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client');
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

    await page.locator('div li').last().waitFor();
    const bool = await page.locator(`h3:has-text("${productName}")`).isVisible();
    console.log(bool)
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

    await page.waitForLoadState('networkidle')
    await expect(page.locator("label[type='text']").last()).toHaveText('rathore.shanu1996@yopmail.com');
    //await page.locator("//input[@class='input txt text-validated ng-pristine ng-valid ng-touched']")
    await page.locator('a:has-text("PLACE ORDER")').click()

})


test('Test Case 2', async () => {


    const productName = 'ZARA COAT 3';
    //const email = 'rathore.shanu1996@yopmail.com'
    const page = await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client');
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles)
})