class DashboardPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator(".card-body");
    this.productsText = this.products.locator("b");
    this.cart = page.locator("[routerlink*=cart]");
  }

  async searchProductAddCart(productName) {
    await this.products.first().waitFor();
    const titles = await this.productsText.allTextContents();
    console.log(titles);

    const count = await this.products.count();

    for (let i = 0; i < count; i++) {
      const item = this.products.nth(i);
      const product = await item.locator("b").textContent();

      console.log(product);

      if (product?.trim() === productName) {
        await item.locator("text=Add To Cart").click();
        break;
      }
    }
  }

  async navigateToCart() {
    await this.cart.click();
    await this.page.locator("div li").first().waitFor();
  }
}

module.exports = { DashboardPage };