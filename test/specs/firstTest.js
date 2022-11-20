describe("Ecommerce Application", () => {
  it("Login Fail page", () => {
    //webdriverIO Async
    browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(browser.getTitle());
  });
});
