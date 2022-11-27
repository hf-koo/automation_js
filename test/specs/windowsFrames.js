describe("Windows and Frames Miscellanous", async () => {
  it("Parent and Child windows switch", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $(".blinkingText").click();
    const handles = await browser.getWindowHandles(); // 2 windows-
    await browser.switchToWindow(handles[1]);
    console.log(await $("h1").getText());
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    console.log(await browser.getTitle());
  });
});
