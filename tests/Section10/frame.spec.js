const { test } = require('@playwright/test')

test('Frame Handling', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const framesPage = await page.frameLocator("#courses-iframe");  //look for framename or frameid
    //const frame = page.frame({ name: 'my-frame' });
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck = await framesPage.locator(".text h2").textContent();
    const subscriber = testCheck.split(" ")[1];
    console.log(subscriber)

    // Back to main page
    // await page.locator('#outside-frame').click();

})