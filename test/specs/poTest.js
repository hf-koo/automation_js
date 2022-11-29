const loginPage = require("../pageobjects/loginPage");
const shopPage = require("../pageobjects/shop");
const reviewPage = require("../pageobjects/reviewPage");
const expectchai = require("chai").expect;

describe("Ecommerce Application", async () => {
  xit("Login Fail page", async () => {
    //webdriverIO Async
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");

    // resolved, pending, rejected

    console.log(await browser.getTitle());
    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");

    //CSS Selector , Xpath
    await loginPage.Login("rahulshettyacademy", "learning123");
    await console.log(await loginPage.alert.getText());

    await browser.waitUntil(
      async () => (await loginPage.signIn.getAttribute("value")) === "Sign In",
      {
        timeout: 5000,
        timeoutMsg: "Error message is not showing up"
      }
    );
    await console.log(await loginPage.alert.getText());
    await expect(await loginPage.textInfo).toHaveTextContaining(
      "username is rahulshettyacademy and Password"
    );
  });

  it("End to End test", async () => {
    const products = ["iphone X", "Blackberry"];
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await loginPage.Login("rahulshettyacademy", "learning");

    //wait until checkout button is displayed
    await shopPage.checkout.waitForExist(); //link text
    await shopPage.addProductToCart(products);
    await shopPage.checkout.click();
    sumOfProducts = await reviewPage.sumOfProducts();
    totalIntValue = await reviewPage.totalFormattedPrice();

    //Streams async mode

    await expectchai(sumOfProducts).to.equal(totalIntValue);
    await $(".btn-success").click();

    await $("#country").setValue("ind");
    await $(".ids-ellipsis").waitForExist({ reverse: true });
    await $("=India").click();
    await $("input[type='submit']").click();
    await expect($(".alert-success")).toHaveTextContaining("Success");
  });
});
