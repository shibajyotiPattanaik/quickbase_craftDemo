const { Builder, By, Key, until } = require("selenium-webdriver");
var BasePage = require("../pageobjects/basepage");
var webdriver = require("selenium-webdriver");
const config = require("../config.json");

class HomePage extends BasePage {

  /*
  @desc Enter the id for element to be clicked on
  @param id
  */

  async clickOnElementById(id) {
    await this.driver.wait(until.elementsLocated(By.id(id)), 1000);
    let element = await this.driver.findElement(By.id(id));
    await this.driver.wait(until.elementIsEnabled(element), 1000);
    await this.driver.executeScript("arguments[0].click();", element);
  }

  /*
  @desc Enter the xpath for element to be clicked on
  @param xpath
  */
  async clickOnElementByXpath(xpath) {
    await this.driver.wait(until.elementsLocated(By.xpath(xpath)), 1000);
    let element = await this.driver.findElement(By.xpath(xpath));
    await this.driver.wait(until.elementIsEnabled(element), 1000);
    await element.click();
  }

  /*
  @desc Enter the className for element to be clicked on
  @param className
  */
  async clickOnElementByClass(className) {
    for (var i = 0; i <= 5; i++) {
      try {
        let element = await this.driver.findElement(By.className(className));
        await this.driver.wait(until.elementIsEnabled(element), 1000);
        await this.driver.executeScript("arguments[0].click();", element);
      } catch (Exception) {}
    }
  }

  /*
  @desc Enter the className for element to fetch text from
  @param className
  */
  async getTextByClass(className) {
    for (var i = 0; i <= 5; i++) {
      try {
        let element = await this.driver.findElement(By.className(className));
        await this.driver.wait(until.elementIsEnabled(element));
        const text = await element.getText();
        return text;
      } catch (Exception) {}
    }
  }

  /*
  @desc Enter the css value for element to fetch text from
  @param css
  */
  async getTextByCss(css) {
    for (var i = 0; i <= 5; i++) {
      try {
        let element = await this.driver.findElement(By.css(css));
        await this.driver.wait(until.elementIsEnabled(element));
        const text = await element.getText();
        return text;
      } catch (Exception) {}
    }
  }

  /*
  @desc Enter the id for element to fetch text from
  @param id
  */
  async getTextById(id) {
    for (var i = 0; i <= 5; i++) {
      try {
        let element = await this.driver.findElement(By.id(id));
        await this.driver.wait(until.elementIsEnabled(element));
        const text = await element.getText();
        return text;
      } catch (Exception) {}
    }
  }

  /*
  @desc Enter the xpath for element to fetch text from
  @param xpath
  */
  async getTextByXpath(xpath) {
    for (var i = 0; i <= 5; i++) {
      try {
        let element = await this.driver.findElement(By.xpath(xpath));
        await this.driver.wait(until.elementIsEnabled(element));
        const text = await element.getText();
        return text;
      } catch (Exception) {}
    }
  }

  /*
  @desc Enter the id for element where values has to be input
  @param id
  */
  async sendKeys(id, Keys) {
    await this.driver.wait(until.elementsLocated(By.id(id)), 1000);
    let input_bar = await this.driver.findElement(By.id(id));
    await this.driver.wait(until.elementIsEnabled(input_bar));
    await input_bar.sendKeys(Keys);
  }

  /*
  @desc Enter the className for element display 
  @param className
  @returns {element display value}
  */
  async checkElementDisplay(className) {
    let input_bar = await this.driver.findElement(By.className(className));
    await this.driver.wait(until.elementIsEnabled(input_bar));
    var value = await input_bar.isDisplayed();
    return value
  }
}

module.exports = new HomePage();
