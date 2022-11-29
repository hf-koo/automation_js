const loginPage = require("../pageobjects/loginPage");

describe("Ecommerce Application", async () => {
  it("Login Fail page", async () => {
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
});
