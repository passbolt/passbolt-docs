/**
 * The `image-size/fromFile` subpath, which is what
 * @docusaurus/mdx-loader actually imports (remark/transformImage).
 */

const { readFile } = require('fs/promises');
const { imageSize } = require('./index.js');

async function imageSizeFromFile(filePath) {
  return imageSize(await readFile(filePath));
}

module.exports = { imageSizeFromFile };
