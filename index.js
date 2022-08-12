

// require('chromedriver');

const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const webdriver = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

(async function example() {


    let streamUrl = process.argv[2]

    console.log("streamUrl:", streamUrl)

    // let driver = await new Builder().forBrowser(Browser.CHROME).build();

    // const service = new chrome.ServiceBuilder('C:');
    // const driver = await new Builder().forBrowser('chrome').setChromeService(service).build();    

    let options = new chrome.Options().headless();

    // browser = webdriver.Chrome(executable_path="./drivers/chromedriver", options=chromeOptions)

    // const service = new chrome.ServiceBuilder('./usr/bin/chromedriver');
    // const driver = new webdriver.Builder().forBrowser('chrome').setChromeService(service).setChromeOptions(options).build();    

    const driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();    

    //let driver = new webdriver.Builder().forBrowser('chrome').build(); 

    await driver.get('https://www.google.com');

    let title = await driver.getTitle();

    console.log("title: ", title)

    await driver.manage().setTimeouts({ implicit: 5000 });

    // await driver.get('http://127.0.0.1:8887/');

    // await driver.findElement(By.id('url')).sendKeys(streamUrl)

    // console.log("wait 5 seconds")
    // await sleep(5000)
    // console.log("click start")

    // await driver.findElement(By.id('start')).click()

  })();
