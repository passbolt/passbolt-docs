/**
 * @type {import("prism-react-renderer").PrismTheme} Passbolt theme
 */
const theme = {
  plain: {
    color: 'ffffff',
    backgroundColor: '#1F1F1F',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#ffffff',
        opacity: 0.5,
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        color: '#ffffff',
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#ffffff',
        opacity: 0.7,
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#ffffff',
        opacity: 0.7,
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: '#ffffff',
        opacity: 0.7,
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#ffffff',
        opacity: 0.7,
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#ffffff',
        fontWeight: '900',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#ffffff',
        fontWeight: '900',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#ffffff',
      },
    },
    {
      types: ['imports'],
      style: {
        color: '#ffffff',
        fontWeight: '900',
      },
    },
  ],
};

module.exports = theme;
