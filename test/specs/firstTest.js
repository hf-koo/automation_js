describe("Ecommerce Application", async () => {
  xit("Login Fail page", async () => {
    //webdriverIO Async
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");

    // resolved, pending, rejected

    console.log(await browser.getTitle());
    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");

    //CSS Selector , Xpath
    $("#username").setValue("rahulshettyacademy");

    await browser.waitUntil(
      async () => (await $("#signInBtn").getAttribute("value")) === "Sign In",
      {
        timeout: 5000,
        timeoutMsg: "Error message is not showing up"
      }
    );
  });

  it("Login Success Page", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("input[name='username']").setValue("rahulshettyacademy");
    const password = $("//input[@type='password']");
    await password.setValue("learning");
    await $("#signInBtn").click();
    //wait until checkout button is displayed
    await $(".btn-primary").waitForExist();
    await expect(browser).toHaveUrlContaining("shop");
    await expect(browser).toHaveTitle("ProtoCommerce");
  });
});
