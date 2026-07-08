const { test, expect } = require("@playwright/test");

const { POManager } = require('../../pageObject/POManager')

test("End to End Automation Learning", async ({ page }) => {


  const poManager = new POManager(page);
  // const context = await browser.newContext();
  // const page = await context.newPage();

  const productName = "ZARA COAT 3";
  const userName = "rathore.shanu1996@yopmail.com";
  const password = "Sh@nu25895";

  const loginPage = poManager.getLoginPage();
  await loginPage.goto();
  await loginPage.validLogin(userName, password);

  //await page.locator('.card-body').first().waitFor()

  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductAddCart(productName);
  await dashboardPage.navigateToCart();

  //await page.locator('div li').first().waitFor()
  const bool = await page.locator(`h3:has-text("${productName}")`).isVisible();
  expect(bool).toBeTruthy();

  await page.locator("text=Checkout").click();

  await page
    .locator("//input[@placeholder='Select Country']")
    .pressSequentially("ind");

  const dropdown = await page.locator(".ta-results");
  await dropdown.waitFor();
  const optionCount = await dropdown.locator("button").count();
  console.log(optionCount);

  for (let i = 0; i < optionCount; i++) {
    let text = await dropdown.locator("button").nth(i).textContent();
    if (text.trim() === "India") {
      console.log(text);
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }

  await expect(page.locator("label[type='text']").first()).toHaveText(userName);
  //await page.locator("//input[@class='input txt text-validated ng-pristine ng-valid ng-touched']")
  await page.locator('a:has-text("PLACE ORDER")').click();

  await page.pause();
});
