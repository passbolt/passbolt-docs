/**
 * @type {import("prism-react-renderer").PrismTheme} Passbolt theme
 */
const theme = {
  plain: {
    color: "ffffff",
    backgroundColor: "#1F1F1F",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#ffffff",
        opacity: .5,
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "#ffffff",
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#ffffff",
        opacity: 0.8,
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#ffffff",
      },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: {
        color: "#ffffff",
        opacity: 0.8,
      },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#ffffff",
        opacity: 0.8,
      },
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        // color: "#2894df",
        color: "#ffffff",
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: "#ffffff",
        opacity: 0.8,
      },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: "#ffffff",
        opacity: 0.8,
      },
    },
  ],
}

module.exports = theme