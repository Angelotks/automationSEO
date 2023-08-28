const { readFile } = require('../utils/helpers');
const puppeteer = require('puppeteer');

const fetchCanonical = async (page, url) => {
  try {
    await page.goto(url, { waitUntil: 'networkidle0' });
    return page.$$eval('link[rel="canonical"]', metas => metas.map(meta => meta.getAttribute('href')));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
};

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    const urls = readFile('../dependencies/urlCanonical.txt');
    const separator = '-'.repeat(120);

    for (const url of urls) {
      const canonicalLinks = await fetchCanonical(page, url);
      console.log(separator);
      console.log(`URL: ${url}`);
      console.log(`Canonical href: ${canonicalLinks.join(', ')}`);
    }
    console.log(separator);
  } catch (error) {
    console.error(`Se encontró un error: ${error}`);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
