// UI Automation Exercise
// Write a UI end to end user test class (language of your choice) that launches a web browser and navigates to the WebdriverIO website
// (http://webdriver.io).  Click on the 'API' link in the top navigation bar and load their API documentation (https://webdriver.io/docs/api).
// Use the search functionality on this page to search their API documentation for the text 'Click'. Validate the correct information/page is returned.
// Expand the “Protocols” section in the left navigation bar and have your test verify that the list under the Protocols section is correct.
// Lastly, create another set of test cases that would further test the functionality of this search widget.
// If possible use the Page Object model for element locators and helper functions.


require("chromedriver");
var assert = require("assert");
const config = require("../config.json");
const homepage = require("../pageobjects/homepage");

describe("testsuite for webdrive page", function () {
  before(async () => {
    var baseurl = "https://webdriver.io/";
    await homepage.go_to_url(baseurl);

    var api = config.elements.api.xpath;
    await homepage.clickOnElementByXpath(api);
  });

  afterEach(async () => {
          await homepage.refresh_driver();
  });

  after(async () => {
    await homepage.close_driver();
  });

  it("test for search bar", async () => {
    let search = config.elements.searchbar.class;
    assert.strictEqual(await homepage.getTextByClass(search), "Search");

    assert.strictEqual(await homepage.elementDisplay(search),true);
    
  });

  it("test for search functionality with text ('Click')", async () => {
    var search = config.elements.searchbar.class;
    await homepage.clickOnElementByClass(search);

    let search_input = config.elements.search_input.id;
    await homepage.sendKeys(search_input, "Click");

    let result_0 = config.elements.search_result_0.id;
    assert.strictEqual(await homepage.getTextById(result_0), "click");

    let result_1 = config.elements.search_result_1.id;
    assert.strictEqual(await homepage.getTextById(result_1), "Usage\nclick");

    let result_2 = config.elements.search_result_2.id;
    assert.strictEqual(await homepage.getTextById(result_2), "doubleClick");

    let result_3 = config.elements.search_result_3.id;
    assert.strictEqual(await homepage.getTextById(result_3), "isClickable");

    let result_4 = config.elements.search_result_4.id;
    assert.strictEqual(await homepage.getTextById(result_4),"waitForClickable"
    );
  });

  it("test for list of protocols", async () => {
    var protocols = config.elements.protocols.xpath;
    await homepage.clickOnElementByXpath(protocols);
    await homepage.driver.sleep(500);
    
    var protocols_list_0 = config.elements.protocols_list_0.xpath;
    assert.strictEqual(await homepage.getTextByXpath(protocols_list_0), "WebDriver Protocol");

    var protocols_list_1 = config.elements.protocols_list_1.xpath;
    assert.strictEqual(await homepage.getTextByXpath(protocols_list_1), "Appium");

    var protocols_list_2 = config.elements.protocols_list_2.xpath;
    assert.strictEqual(await homepage.getTextByXpath(protocols_list_2), "Mobile JSON Wire Protocol");

    var protocols_list_3 = config.elements.protocols_list_3.xpath;
    assert.strictEqual(await homepage.getTextByXpath(protocols_list_3), "Chromium");

    var protocols_list_4 = config.elements.protocols_list_4.xpath;
    assert.strictEqual(await homepage.getTextByXpath(protocols_list_4), "Sauce Labs");

    var protocols_list_5 = config.elements.protocols_list_5.xpath;
    assert.strictEqual(await homepage.getTextByXpath(protocols_list_5), "Selenium Standalone");

    var protocols_list_6 = config.elements.protocols_list_6.css;
    assert.strictEqual(await homepage.getTextByCss(protocols_list_6), "JSON Wire Protocol");
  
  });


});

