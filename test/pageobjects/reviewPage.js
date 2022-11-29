class ReviewPage {
  get checkout() {
    return $("*=Checkout");
  }
  get productPrices() {
    return $$("//tr/td[4]/strong");
  }
  get totalPrice() {
    return $("h3 strong");
  }
  async sumOfProducts() {
    const sumOfProducts = (
      await Promise.all(
        await this.productPrices.map(async (productPrice) =>
          parseInt((await productPrice.getText()).split(".")[1].trim())
        )
      )
    ).reduce((acc, price) => acc + price, 0);
    console.log(sumOfProducts);
  }

  async totalFormattedPrice() {
    const TotalValue = await this.totalPrice.getText();
    const totalIntValve = await parseInt(TotalValue.split(".")[1].trim());
  }
}

module.exports = new ReviewPage();
