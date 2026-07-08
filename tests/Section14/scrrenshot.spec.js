const { test, expect } = require('@playwright/test');

test('Browser navigation validation', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // await page.goto('https://www.google.com/');

    // await page.goBack();
    // await expect(page).toHaveURL(/AutomationPractice/);

    // await page.goForward();
    // await expect(page).toHaveURL(/google/);



    await expect(page.locator("displayed-text")).toBeVisible();
    await page.locator("hide-textbox").click()
    await page.screencast({path:'screenshot.png'})
    await expect(page.locator("displayed-text")).toBeHidden();

    // Java Popup

    // page.on("close")
    
    // page.on('dialog', dialog => dialog.accept());
    // await page.locator("confirmbtn").click();
    // await page.pause();
    // page.on('dialog', dialog => dialog.dismiss());
    // const framesPage = await page.frameLocator("#courses-iframe");  //look for framename or frameid
    // const frame = page.frame({ name: 'my-frame' });
    // await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    // const textCheck = await framesPage.locator(".text h2").textContent();
    // const subscriber = testCheck.split(" ")[1];
    // console.log(subscriber)


});