describe("ui Control", async () => {
  it("UI Controls", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("input[name='username']").setValue("rahulshettyacademy");
    const password = $("//input[@type='password']");
    await password.setValue("learning");

    //what if multiple elements $$
    const radioButtons = await $$(".customradio");
    const userDropdown = radioButtons[1];
    await userDropdown.$("span").click(); //chaining locators
    await browser.pause(4000);
  });
});
