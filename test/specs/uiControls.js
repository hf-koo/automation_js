const expectchai = require("chai").expect;

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

    const modal = await $(".modal-body");
    await modal.waitForDisplayed();
    await $("#cancelBtn").click();
    await $$(".customradio")[0].$("span").isSelected();
    await modal.waitForDisplayed();
    await $("#okayBtn").click();
    // validate pop up not shown up when you select admin

    await $$(".customradio")[0].$("span").click();
    await expect(modal).not.toBeDisplayed();
    const dropdown = await $("select.form-control"); //select tag
    await dropdown.selectByAttribute("value", "teach");
    await dropdown.selectByVisibleText("Consultant");
    await browser.pause(4000);

    await dropdown.selectByIndex(0);
    console.log(await dropdown.getValue());
    //chai assertion
    expectchai(await dropdown.getValue()).to.equal("stud");
  });
});
