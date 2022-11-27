const expectchai = require("chai").expect;

describe("UI Controls Test Suite", async () => {
  xit("UI Controls", async () => {
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

  xit("Dynamic Dropdown Controls", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#autocomplete").setValue("ind");
    await browser.pause(3000);
    let items = await $$("[class='ui-menu-item'] div");
    for (var i = 0; i < (await items.length); i++) {
      if ((await items[i].getText()) === "India") {
        await items[i].click();
        await browser.pause(3000);
      }
    }
  });

  it("Checkboxes Identification", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    const element = await $$("input[type='checkbox']");
    await element[1].click();
    console.log(await element[1].isSelected());
    console.log(await element[2].isSelected());
    await browser.saveScreenshot("screenshot.png");
  });
});
