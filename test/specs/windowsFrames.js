describe("Windows and Frames Miscellanous", async () => {
  xit("Parent and Child windows switch", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $(".blinkingText").click();
    const handles = await browser.getWindowHandles(); // 2 windows-
    await browser.switchToWindow(handles[1]);
    console.log(await $("h1").getText()); // Rahul Shetty Academy
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    console.log(await browser.getTitle()); //LoginPage Practise | Rahul Shetty
    await browser.newWindow("https://google.com"); // automation
    console.log(await browser.getTitle()); // Rahul Shetty Academy
    await browser.switchWindow(
      "https://rahulshettyacademy.com/loginpagePractise"
    );
    await $("#username").setValue("helloiswitchback");
    await browser.pause(4000);
  });

  it("Frames switch", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#mousehover").scrollIntoView();
    console.log(await $$("a").length);
    await browser.switchToFrame(await $("[id='courses-iframe']"));
    console.log(await $("=Courses").getTagName());
    console.log(await $$("a").length);
  });
});
