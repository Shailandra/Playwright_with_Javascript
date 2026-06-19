1. first you have to import @playwright/test

2. Note : Fixtures are considered as a Global variable accross the playwright

3. test.only() help to execute only the test case 

4. Note: Do not user {brower , page} at the same time it will create issue, if want to create own context then user {browser} else use {page}

5. to extract the .textContent()

6. Let's Shop : https://rahulshettyacademy.com/client/#/auth/login

7. How to wait Dyanamically in playwright
   page.waitFor

8. page.pause()   ==> playwright inspector

9. pressSequentially("ind") help us to enter Enter latter one by one

10. test('@API Place the order', async ({ page }) => {
    await page.addInitScript(value => {

        window.localStorage.setItem('token', value);
    }, response.token);

11. await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({ storageState: 'state.json' });
   
12. How to debug WebAPI + Automation [add --debug but you can't dubug WebAPI]
    inside package.json
     "scripts": {
    "test":"npx playwright test ./tests/Section12/webAPIPart3.spec.js --headed"
    },

note : Need to watch section 12 again when requied for tracing

Note : Section 13 need to be done for API Testing with playwright

