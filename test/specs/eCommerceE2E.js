const expectchai = require("chai").expect;
describe("Ecommerce Application", async () => {
  it("Login Success Page", async () => {
    const products = ["iphone X", "Blackberry"];
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("input[name='username']").setValue("rahulshettyacademy");
    const password = $("//input[@type='password']");
    await password.setValue("learning");
    await $("#signInBtn").click();
    //wait until checkout button is displayed
    const link = await $("*=Checkout");
    await link.waitForExist(); //link text
    const cards = await $$("div[class='card h-100']");
    for (let i = 0; i < (await cards.length); i++) {
      const card = cards[i].$("div h4 a");
      if (products.includes(await card.getText())) {
        await cards[i].$(".card-footer button").click();
      }
    }
    await link.click();
    const productPrices = await $$("//tr/td[4]/strong");
    //Streams async mode
    const sumOfProducts = (
      await Promise.all(
        await productPrices.map(async (productPrice) =>
          parseInt((await productPrice.getText()).split(".")[1].trim())
        )
      )
    ).reduce((acc, price) => acc + price, 0);
    console.log(sumOfProducts);
    const TotalValue = await $("h3 strong").getText();
    const totalIntValve = await parseInt(TotalValue.split(".")[1].trim());
    await expectchai(sumOfProducts).to.equal(totalIntValve);
    await $(".btn-success").click();
    await $("#country").setValue("ind");
    await $(".ids-ellipsis").waitForExist({ reverse: true });
    await $("=India").click();
    await $("input[type='submit']").click();
    await expect($(".alert-success")).toHaveTextContaining("Success");
  });
});
