// all we are saying here is that we need puppeteer to run when this file starts
const puppeteer = require('puppeteer-core')

// these are the urls we want to go to
const url = "https://google.com"
const urlTwo = "https://reddit.com"


// puppeteerTest is a function that will be called when we start node with this file. It's going to launch chrome and do stuff we tell it to do.

const puppeteerTest = async () => {
    try {
        // browser, these are just a few of the options available to alter the settings of the browser that will launch
        let browser = await puppeteer.launch({
            // set headless to true if you dont want a browser window to pop up, your code will still run
            headless: false,
            // i forget what this does
            defaultViewport: null,
            // increase the number here if you want it to go slower
            slowMo: 10,
            // set this to false if you don't want dev tools to open
            devTools: true,
            // this is the path to your chromium download
            executablePath: 'C:/Users/jvala/Documents/chromium/chrome-win/chrome.exe'
        })

        // applying the browser to a new page
        let page = await browser.newPage();

        // once that page loads we're going to go to this url
        await page.goto(`${url}`, { waitUntil: 'domcontentloaded' })

        // this function here takes two strings as the parameters. page.type('string1', 'string2')
        // string1 is the selector. you can get this by opening a website, opening chrome dev tools, right clicking on an element and choosing copy selector
        // string2 is what you want to type inside the element.
        // so this function waits for the page to load, finds the element and types "Hello"
        await page.type("#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input", "Hello");

        // this function here takes one string as the parameters as well. page.click('string1')
        // string1 is the selector, find what you want puppeteer to click on
        // we're going to click on search.
        await page.click('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input.gNO89b');

        // i believe that these are the two main functions that you need, and if you need more functionality of course you can just go to https://github.com/GoogleChrome/puppeteer

        // this shit below  doesn't matter right now
        return browser;
    } catch (e) {
        console.log(e);
    } finally {

    }
};

puppeteerTest();