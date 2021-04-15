const { Builder, By, Key, until } = require("selenium-webdriver");
var BasePage = require("../pageobjects/basepage");
var webdriver = require("selenium-webdriver");
const config = require("../config.json");

class HomePage extends BasePage {
  async clickOnElementById(x) {
    await this.driver.wait(until.elementsLocated(By.id(x)), 1000);
    let element = await this.driver.findElement(By.id(x));
    await this.driver.wait(until.elementIsEnabled(element), 1000);
    await this.driver.executeScript("arguments[0].click();", element);
  }

  async clickOnElementByXpath(x) {
    let element = await this.driver.findElement(By.xpath(x));
    await this.driver.wait(until.elementIsEnabled(element), 1000);
    await element.click();
  }

  async clickOnElementByClass(y) {
    for (var i = 0; i <= 5; i++) {
      try {
        let element = await this.driver.findElement(By.className(y));
        await this.driver.wait(until.elementIsEnabled(element), 1000);
        await this.driver.executeScript("arguments[0].click();", element);
      } catch (Exception) {}
    }
  }

  async getTextByClass(y) {
    for (var i = 0; i <= 5; i++) {
      try {
        let element = await this.driver.findElement(By.className(y));
        await this.driver.wait(until.elementIsEnabled(element));
        const text = await element.getText();
        return text;
      } catch (Exception) {}
    }
  }

  async getTextByCss(y) {
    for (var i = 0; i <= 5; i++) {
      try {
        let element = await this.driver.findElement(By.css(y));
        await this.driver.wait(until.elementIsEnabled(element));
        const text = await element.getText();
        return text;
      } catch (Exception) {}
    }
  }

  async getTextById(identifier) {
    for (var i = 0; i <= 5; i++) {
      try {
        let element = await this.driver.findElement(By.id(identifier));
        await this.driver.wait(until.elementIsEnabled(element));
        const text = await element.getText();
        return text;
      } catch (Exception) {}
    }
  }

  async getTextByXpath(identifier) {
    for (var i = 0; i <= 5; i++) {
      try {
        let element = await this.driver.findElement(By.xpath(identifier));
        await this.driver.wait(until.elementIsEnabled(element));
        const text = await element.getText();
        return text;
      } catch (Exception) {}
    }
  }

  async sendKeys(identifier, Keys) {
    await this.driver.wait(until.elementsLocated(By.id(identifier)), 1000);
    let input_bar = await this.driver.findElement(By.id(identifier));
    await this.driver.wait(until.elementIsEnabled(input_bar));
    await input_bar.sendKeys(Keys);
  }

  async elementDisplay(identifier) {
    let input_bar = await this.driver.findElement(By.className(identifier));
    await this.driver.wait(until.elementIsEnabled(input_bar));
    var value = await input_bar.isDisplayed();
    return value
  }
}

module.exports = new HomePage();
