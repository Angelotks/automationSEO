const { readFile } = require('../utils/helpers');
const puppeteer = require('puppeteer');

const fetchFriendlyURL = async (page, url) => {
  await page.goto(url);
  return page.evaluate(() => {
    if (typeof Liferay !== 'undefined' && Liferay.ThemeDisplay) {
      return Liferay.ThemeDisplay.getLayoutRelativeURL();
    } else {
      return null;
    }
  });
};

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    const urls = readFile('../dependencies/urlFriendly.txt');
    const separator = '-'.repeat(120);
    const map = new Map();

    for (const url of urls) {
      console.log(separator);
      const layoutRelativeURL = await fetchFriendlyURL(page, url);
      console.log(`URL: ${url}`);
      if (layoutRelativeURL) {
        console.log(`FriendlyURL: ${layoutRelativeURL}`);
        map.set(`${layoutRelativeURL}`, `${layoutRelativeURL}`);
      }
    }
    console.log(separator);

    console.log("FriendlyURL de las páginas solicitadas.");
    console.log(separator);
    map.forEach((value, key) => {
      console.log("FriendlyURL: " + key);
    });
    console.log(separator);

  } catch (error) {
    console.error(`Se encontró un error: ${error}`);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
