const expectchai = require("chai").expect;

describe("Functional Testing on Application", async () => {
  it("Scrolling and Mouse hover", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#mousehover").scrollIntoView();
    await browser.pause(3000);
    await $("#mousehover").moveTo();
    await browser.pause(3000);
    await $("=Top").click();
  });
});
