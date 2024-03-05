const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
const domain = 'https://www.passbolt.com';

/**
 *
 * @param {string} url
 */
function generateLink(url) {
  if (url && url.startsWith('/')) {
    return `${domain}${url}`;
  } else {
    return url;
  }
}

/**
 *
 * @param {object} item The
 * @returns
 */
function generateItem(item) {
  const label = item.textContent;
  const link = item.querySelector('a')?.getAttribute('href');

  if (link) {
    return {
      label,
      href: generateLink(link)
    };
  } else {
    return {
      html: label
    };
  }
}

async function main() {
  try {
    let response = await fetch(domain);
    const body = await response.text();

    const dom = new JSDOM(body);
    const footerColumns = dom.window.document.querySelectorAll(
      '[class*="Footer_column__"]',
    );

    const data = Array.from(footerColumns).map((column) => ({
      title: column.querySelector('p')?.textContent,
      items: [...column.querySelectorAll('ul li')].map((link) => generateItem(link)),
    }));

    fs.writeFileSync(
      path.join(__dirname, '../data/footer.json'),
      JSON.stringify(data, null, 2),
    );
  } catch (e) {
    console.log(e);
  }
}

main();
