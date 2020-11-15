const puppeteer = require('puppeteer');
const config = require('./enviroment')

const declare = 'https://parents.education.gov.il/prhnet/parents/rights-obligations-regulations/health-statement-kindergarden';
const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36";
const fillXpath = '/html/body/app-root/main/div/components-page/div/div[2]/section[1]/div/health-declaration/div[1]/div[1]/div[4]/div/div/div/input';

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();
    await page.setUserAgent(userAgent);
    await page.goto(declare);
    let a = await page.$x(fillXpath);
    a[0].click()
    await page.waitForNavigation()

    // must click submit before typing (bug)
    let loginBtn = await page.waitForSelector(".user-pass-login fieldset button:first-of-type")
    loginBtn.click();
    await page.waitForNavigation();

    let userField = await page.waitForSelector(".user-pass-login fieldset input:first-of-type")
    let passwordField = await page.waitForSelector(".user-pass-login fieldset span input:last-of-type")

    userField.type(config.config.userCode);
    await page.waitForTimeout(1000);

    passwordField.type(config.config.password);
    await page.waitForTimeout(1000);

    loginBtn = await page.waitForSelector(".user-pass-login fieldset button:first-of-type")
    loginBtn.click();
    await page.waitForTimeout(5000);

    let submitBtn = await page.waitForSelector(".fixer-container > input:first-of-type")
    console.log(submitBtn);

    let declareBtn = await page.waitForSelector(".kid-container input:first-of-type")
    declareBtn.click();

    let finishBtn = await page.waitForSelector(".container-hatzara input:last-of-type")
    finishBtn.click();

    await page.screenshot({ path: 'result' });
    await browser.close();
})().catch((x) => { process.exit(1); });