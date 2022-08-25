const {Builder, By} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require("chromedriver");

var fs = require('fs');

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

(async () => {
  
    //let driver = await new Builder().forBrowser('chrome').build();

    let options = new chrome.Options().headless();

    const driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();   

    const url = "https://ovenplayer.netlify.app/"
    const streamUrl = process.argv[2]    

    await driver.get(url);

    await driver.findElement(By.id('url')).sendKeys(streamUrl);

    await sleep(5000)
    console.log("click start")

    await driver.findElement(By.id('start')).click()

    await sleep(10000)
    console.log("Making screenshot")
    driver.takeScreenshot().then(
      function(image, err) {
        //Screenshot will be saved under current directory with name myscreenshot.png
        fs.writeFile("myscreenshot.png", image, "base64", function(error) {
        if(error!=null)
          console.log("Error occured while saving screenshot" + error);
        });
      }
    );

})();