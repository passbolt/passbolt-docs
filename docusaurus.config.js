// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const passboltTheme = require('./src/lib/prism-passbolt');

const ROUTES = {
  HELPSITE_URL: 'https://www.passbolt.com/docs',
  WEBSITE_URL: 'https://www.passbolt.com',
  BLOG_URL: 'https://blog.passbolt.com',
  CAREERS_URL: 'https://careers.passbolt.com',
  FORUM_URL: 'https://community.passbolt.com',
  REDDIT_URL: 'https://www.reddit.com/r/passbolt',
  GITHUB_URL: 'https://github.com/passbolt',
  TWITTER_URL: 'https://twitter.com/passbolt',
  LINKEDIN_URL: 'https://www.linkedin.com/company/passbolt',
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Passbolt documentation.',
  tagline: 'Everything you need to optimize the way you work with Passbolt.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: ROUTES.HELPSITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'passbolt', // Usually your GitHub org/user name.
  projectName: 'passbolt-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og.jpg',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        }
      },
      navbar: {
        logo: {
          alt: 'Passbolt logo',
          src: 'img/logo.svg',
          width: 160,
        },
        items: [
          {
            href: ROUTES.WEBSITE_URL,
            position: 'left',
            className: 'main-website-link',
            title: 'Return to main website',
            label: '←',
          },
          {
            type: 'docSidebar',
            sidebarId: 'userGuideSidebar',
            position: 'left',
            label: 'User guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'adminGuideSidebar',
            position: 'left',
            label: 'Admin guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developerGuideSidebar',
            position: 'left',
            label: 'Developer guide',
          },
          // {
          //   to: 'api',
          //   position: 'left',
          //   label: 'API',
          // },
          {
            href: ROUTES.GITHUB_URL,
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'About',
                href: `${ROUTES.WEBSITE_URL}/about`,
              },
              {
                label: 'Blog',
                href: ROUTES.BLOG_URL,
              },
              {
                label: 'Careers',
                href: ROUTES.CAREERS_URL,
              },
              {
                label: 'Contact us',
                href: `${ROUTES.WEBSITE_URL}/contact`,
              }
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Security',
                href: `${ROUTES.WEBSITE_URL}/security/more`,
              },
              {
                label: 'Privacy policy',
                href: `${ROUTES.WEBSITE_URL}/privacy`,
              },
              {
                label: 'Legal terms',
                href: `${ROUTES.WEBSITE_URL}/terms`,
              },
              {
                label: 'Credits',
                href: `${ROUTES.WEBSITE_URL}/credits`,
              }
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Github',
                href: ROUTES.GITHUB_URL,
              },
              {
                label: 'Twitter',
                href: ROUTES.TWITTER_URL,
              },
              {
                label: 'Community Forum',
                href: ROUTES.FORUM_URL,
              },
              {
                label: 'Reddit',
                href: ROUTES.REDDIT_URL,
              },
              {
                label: 'LinkedIn',
                href: ROUTES.LINKEDIN_URL,
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Passbolt S.A. All right reserved.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        darkTheme: passboltTheme,
      },
    }),
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],
};

module.exports = config;
