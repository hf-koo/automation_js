describe("Ecommerce Application", async () => {
  it("Login Fail page", async () => {
    //webdriverIO Async
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");

    // resolved, pending, rejected

    console.log(await browser.getTitle());
    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");

    //CSS Selector , Xpath
    $("#username").setValue("rahulshettyacademy");
  });
});
