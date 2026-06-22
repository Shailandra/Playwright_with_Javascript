class LoginPage {

    constructor(page) {
        this.page = page;
        this.userName = page.locator('#userEmail')
        this.password = page.locator('[type*="password"]')
        this.signInBtn = page.locator('#login')
    }

    async validLogin(userName, password) {
        await this.userName.type(userName);
        await this.password.type(password);
        await this.signInBtn.click()

    }

  /*   async goto(url)
    {
        await this.page.goto(url)
    } */
   
    async goto()
    {
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    }
}

module.exports = {LoginPage}