const loginPage = require("../pageObjects/loginPage");
const shopPage = require("../pageObjects/shop");
const reviewPage = require("../pageObjects/reviewPage");
const expectchai = require("chai").expect;
const fs = require("fs");
let credentials = JSON.parse(fs.readFileSync("test/testData/LoginTest.json"));
let e2eCredentials = JSON.parse(fs.readFileSync("test/testData/e2eTest.json"));

describe("Ecommerce Application", async () => {
  credentials.forEach(({ username, password }) => {
    xit("Login Fail page", async () => {
      //webdriverIO Async
      await browser.url("https://rahulshettyacademy.com/loginpagePractise/");

      // resolved, pending, rejected

      console.log(await browser.getTitle());
      await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");

      //CSS Selector , Xpath
      await loginPage.Login(username, password);
      await console.log(await loginPage.alert.getText());

      await browser.waitUntil(
        async () =>
          (await loginPage.signIn.getAttribute("value")) === "Sign In",
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
  });

  e2eCredentials.forEach(({ products }) => {
    it("End to End test", async () => {
      //const products = ["iphone X", "Blackberry"];
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
});
