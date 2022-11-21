describe("UI Controls Test Suite", async () => {
  it("UI Controls", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("input[name='username']").setValue("rahulshettyacademy");
    const password = $("//input[@type='password']");
    await password.setValue("learning");
    //what if multiple elements $$
    const radionButtons = await $$(".customradio");
    const userDropdown = radionButtons[1];
    await userDropdown.$("span").click();
    await browser.pause(4000);
  });
});
