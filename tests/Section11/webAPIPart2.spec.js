const { test, expect, request } = require('@playwright/test')
const url = 'https://rahulshettyacademy.com/api/ecom/auth/login'
const loginPayload = { userEmail: "rathore.shanu1996@yopmail.com", userPassword: "Sh@nu25895" };
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3" }] }
let token;
let orderId;

test.beforeAll(async () => {

    //login API
    const apiContext = await request.newContext()
    const loginResponse = await apiContext.post(url, {
        data: loginPayload
    })

    expect(loginResponse.ok()).toBeTruthy()
    const loginResponseJson = loginResponse.json();
    token = loginResponseJson.token;
    console.log('Token');


    //
    const orderResponse = await apiContext.post('https://rahulshettyacademy.com/',
        {
            data: orderPayload,
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
        }
    )

    const orderResponseJson = await orderResponse.json()
    console.log(orderResponseJson)
    orderId = orderResponseJson.orders[0];

})



test('E2E functionality using Web API Testing', async ({ page }) => {


    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, token)

})