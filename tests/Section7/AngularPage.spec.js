const { test } = require('@playwright/test')

test("Playwright Special locator", async ({ page }) => {

    //const context = await browser.newContext();
    //const page = await context.newPage();

    const url = 'https://rahulshettyacademy.com/angularpractice/'

    await page.goto(url);

    await page.getByLabel("Check me out if you Love IceCreams!").click()
    await page.getByLabel('Employed').check()
    await page.getByLabel("Gender").selectOption("Male");

    await page.getByPlaceholder("Password").fill("Shailandra")
    await page.getByRole('button', { name: 'Submit' }).click()
    const bool = await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole('link', { name: 'Shop' }).click();
    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole('button',{name:'Add'}).click()


    // await page.getByLabel("Name").fill("Shailandra")
    // await page.getByLabel("Password").fill("")
    // await page.getByLabel("Email").fill("")
    // await page.getByText("Check me out if you Love IceCreams!")


})