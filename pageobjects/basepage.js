const webdriver = require("selenium-webdriver"),
        By = webdriver.By
        ,until = webdriver.until;


class BasePage{

    /* @param webdriver
       @constructor
    */
    constructor(){
    this.driver = new webdriver.Builder().forBrowser("chrome").build();
    this.driver.manage().setTimeouts({implicit: (10000)});
    }   

    // @param url
    async go_to_url(theURL){
        await this.driver.get(theURL);
    }

    async close_driver(){
        await this.driver.close();
    }

    async refresh_driver(){
        await this.driver.navigate().refresh();
    }

}

module.exports = BasePage;