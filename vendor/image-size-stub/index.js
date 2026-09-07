/**
 * Minimal replacement for the `image-size` package. See README.md in this
 * directory for why it exists and when to remove it.
 *
 * Parses only the formats this repository references from markdown image
 * syntax: PNG and SVG. Any other input throws, which Docusaurus catches and
 * reports as a build warning ("The image at <path> can't be read correctly"),
 * so the build still succeeds and the gap is visible in the log.
 */

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function pngSize(buffer) {
  // Width and height are the first two fields of the IHDR chunk, which the
  // PNG specification requires to appear first, at byte 16 and 20.
  if (buffer.length < 24 || buffer.toString('ascii', 12, 16) !== 'IHDR') {
    throw new Error('Invalid PNG: missing IHDR chunk');
  }
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
    type: 'png',
  };
}

function svgAttribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}=(['"])([^'"]+)\\1`));
  return match ? match[2] : null;
}

function svgSize(buffer) {
  const text = buffer.toString('utf8');
  const root = text.match(/<svg\s[^>]*>/);
  if (!root) {
    throw new Error('Invalid SVG: no <svg> root tag');
  }
  const width = parseFloat(svgAttribute(root[0], 'width'));
  const height = parseFloat(svgAttribute(root[0], 'height'));
  if (!Number.isNaN(width) && !Number.isNaN(height)) {
    return { width: Math.round(width), height: Math.round(height), type: 'svg' };
  }
  const viewBox = svgAttribute(root[0], 'viewBox');
  if (viewBox) {
    const parts = viewBox.split(/[\s,]+/).map(parseFloat);
    if (parts.length === 4 && parts.every((n) => !Number.isNaN(n))) {
      return { width: Math.round(parts[2]), height: Math.round(parts[3]), type: 'svg' };
    }
  }
  throw new Error('Invalid SVG: no usable width/height or viewBox');
}

function imageSize(buffer) {
  if (buffer.subarray(0, 8).equals(PNG_SIGNATURE)) {
    return pngSize(buffer);
  }
  if (buffer.subarray(0, 1024).toString('utf8').includes('<svg')) {
    return svgSize(buffer);
  }
  throw new Error(
    'passbolt-docs-image-size-stub only parses PNG and SVG; extend vendor/image-size-stub if the docs need another format'
  );
}

module.exports = { imageSize };
