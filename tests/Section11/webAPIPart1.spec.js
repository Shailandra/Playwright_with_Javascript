const { test, expect, request } = require('@playwright/test');

const loginPayload = { userEmail: "rathore.shanu1996@yopmail.com", userPassword: "Sh@nu25895" }
let token;


test.beforeAll(async () => {

    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayload
        })//200,201
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token)

})

// test.beforeEach(() => {
// })
//beforeAll -- test1 test2 test3

test("End to End Automation Learning", async ({ page }) => {

    // const context = await browser.newContext()
    // const page = await context.newPage()


    const productName = 'ZARA COAT 3';
    // const email = 'rathore.shanu1996@yopmail.com'

    // page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    // const userName = page.locator('#userEmail')
    // const password = page.locator('[type*="password"]')
    // const signInBtn = page.locator('#login')

    // await userName.fill(email)
    // await password.fill('Sh@nu25895')
    // await signInBtn.click()

    // await page.waitForLoadState('networkidle');
    // await page.locator('.card-body').first().waitFor()

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    await page.goto('https://rahulshettyacademy.com/client/');
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


    //verify if order created is showing in History page

    //precondition  - order created

})