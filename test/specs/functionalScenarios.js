const expectchai = require("chai").expect;

describe("Functional Testing on Application", async () => {
  it("Scrolling and Mouse hover", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#mousehover").scrollIntoView();
    await browser.pause(3000);
    await $("#mousehover").moveTo();
    await browser.pause(3000);
    await $("=Top").click();
    await browser.url(
      "https://only-testing-blog.blogspot.com/2014/09/selectable.html"
    );
    await $("button").doubleClick();
    console.log(await browser.isAlertOpen());
    expectchai(await browser.isAlertOpen()).to.be.true;
    expectchai(await browser.getAlertText()).to.equal(
      "You double clicked me.. Thank You.."
    );
    await browser.acceptAlert();
    await browser.pause(3000);
  });
});
