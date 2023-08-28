const { readFile } = require('../utils/helpers');
const puppeteer = require('puppeteer');

const fetchMetaRobots = async (page, url) => {
  await page.goto(url, { waitUntil: 'networkidle0' });
  return page.$$eval('meta[name="robots"]', metas => metas.map(meta => {
    const attributes = {};
    for (let {name, value} of meta.attributes) {
      attributes[name] = value;
    }
    return attributes;
  }));
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const separator = '-'.repeat(120);
  const urls = readFile('../dependencies/urlMetarobots.txt');

  for (const url of urls) {
    try {
      const robotsMeta = await fetchMetaRobots(page, url);
      console.log(separator);
      console.log(`Meta Url: ${url}`);
      console.log(robotsMeta);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  console.log(separator);
  await browser.close();
})();
