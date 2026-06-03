const { test, expect } = require('@playwright/test')

test('Home Page', async ({ page }) => {

   await page.goto('https://www.demoblaze.com/')
   const pageTtile = page.title()
   //console.log("Page title is :",pageTtile);
   await expect(page).toHaveTitle('STORE'); 
   const pageURL = page.url()
   await page.close();
   

})