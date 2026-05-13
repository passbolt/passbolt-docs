// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';
import footerLinks from './data/footer.json';

const ROUTES = {
  HELPSITE_URL: 'https://www.passbolt.com/docs',
  WEBSITE_URL: 'https://www.passbolt.com',
  BLOG_URL: 'https://blog.passbolt.com',
  CAREERS_URL: 'https://careers.passbolt.com',
  FORUM_URL: 'https://community.passbolt.com',
  REDDIT_URL: 'https://www.reddit.com/r/passbolt',
  GITHUB_URL: 'https://github.com/passbolt/passbolt-docs',
  GITHUB_ORG_URL: 'https://github.com/passbolt',
  BLUESKY_URL: 'https://bsky.app/profile/passbolt.bsky.social',
  LINKEDIN_URL: 'https://www.linkedin.com/company/passbolt',
  YOUTUBE_URL: 'https://www.youtube.com/user/passboltpassword',
  MASTODON_URL: 'https://mastodon.social/@passbolt',
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: ' ',
  titleDelimiter: ' ',
  tagline: 'Everything you need to optimize the way you work with Passbolt.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : ROUTES.WEBSITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.VERCEL_URL ? '/' : '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'passbolt', // Usually your GitHub org/user name.
  projectName: 'passbolt-docs', // Usually your repo name.

  onBrokenLinks: process.env.VERCEL_URL ? 'warn' : 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: process.env.VERCEL_URL ? 'warn' : 'throw',
    },
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace 'en' with 'zh-Hans'.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  trailingSlash: true,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars/index.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          editUrl: 'https://github.com/passbolt/passbolt-docs/blob/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          ignorePatterns: ['/docs/components/**', '/docs/development/**'],
        },
      }),
    ],
    [
      'redocusaurus',
      /** @type {import('redocusaurus').PresetEntry} */
      {
        specs: [
          {
            spec: 'openapi/root.yml',
            route: '/api',
          },
        ],
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Hosting configure/ → flattened paths
          { from: '/hosting/configure/firewall-rules/', to: '/hosting/firewall-rules/' },
          { from: '/hosting/configure/ntp/', to: '/hosting/ntp/' },
          { from: '/hosting/configure/environment-reference/', to: '/hosting/environment-reference/' },

          // TLS & HTTPS (configure/tls + configure/https → tls/)
          { from: '/hosting/configure/tls/', to: '/hosting/tls/' },
          { from: '/hosting/configure/tls/troubleshooting/', to: '/hosting/tls/troubleshooting/' },
          { from: '/hosting/configure/https/', to: '/hosting/tls/https/' },
          { from: '/hosting/configure/https/ce/aws-auto/', to: '/hosting/tls/ce/aws-auto/' },
          { from: '/hosting/configure/https/ce/debian-auto/', to: '/hosting/tls/ce/debian-auto/' },
          { from: '/hosting/configure/https/ce/debian-manual/', to: '/hosting/tls/ce/debian-manual/' },
          { from: '/hosting/configure/https/ce/digital-ocean-auto/', to: '/hosting/tls/ce/digital-ocean-auto/' },
          { from: '/hosting/configure/https/ce/docker-auto/', to: '/hosting/tls/ce/docker-auto/' },
          { from: '/hosting/configure/https/ce/docker-manual/', to: '/hosting/tls/ce/docker-manual/' },
          { from: '/hosting/configure/https/ce/rpm-auto/', to: '/hosting/tls/ce/rpm-auto/' },
          { from: '/hosting/configure/https/ce/rpm-manual/', to: '/hosting/tls/ce/rpm-manual/' },
          { from: '/hosting/configure/https/pro/aws-auto/', to: '/hosting/tls/pro/aws-auto/' },
          { from: '/hosting/configure/https/pro/debian-auto/', to: '/hosting/tls/pro/debian-auto/' },
          { from: '/hosting/configure/https/pro/debian-manual/', to: '/hosting/tls/pro/debian-manual/' },
          { from: '/hosting/configure/https/pro/docker-auto/', to: '/hosting/tls/pro/docker-auto/' },
          { from: '/hosting/configure/https/pro/docker-manual/', to: '/hosting/tls/pro/docker-manual/' },
          { from: '/hosting/configure/https/pro/ova-auto/', to: '/hosting/tls/pro/ova-auto/' },
          { from: '/hosting/configure/https/pro/rpm-auto/', to: '/hosting/tls/pro/rpm-auto/' },
          { from: '/hosting/configure/https/pro/rpm-manual/', to: '/hosting/tls/pro/rpm-manual/' },

          // Database (configure/database → database/)
          { from: '/hosting/configure/database/configure-database/', to: '/hosting/database/' },
          { from: '/hosting/configure/database/configure-database/mariadb/', to: '/hosting/database/' },
          { from: '/hosting/configure/database/configure-database/mysql/', to: '/hosting/database/' },
          { from: '/hosting/configure/database/configure-database/postgres/', to: '/hosting/database/postgres/' },
          { from: '/hosting/configure/database/update-database-credentials/', to: '/hosting/database/' },
          { from: '/hosting/configure/database/update-database-credentials/docker/', to: '/hosting/database/' },
          { from: '/hosting/configure/database/update-database-credentials/package/', to: '/hosting/database/' },

          // LDAP (configure/ldap → ldap/)
          { from: '/hosting/configure/ldap/ldaps/', to: '/hosting/ldap/ldaps/' },
          { from: '/hosting/configure/ldap/ldap-cron/', to: '/hosting/ldap/ldap-cron/' },
          { from: '/hosting/configure/ldap/troubleshooting/', to: '/hosting/ldap/troubleshooting/' },

          // Upgrade (old nested path)
          { from: '/hosting/update/upgrade/', to: '/hosting/upgrade/' },

          // Hosting FAQ → relocated pages
          { from: '/hosting/faq/how-to-enable-cleartext-export/', to: '/hosting/environment-reference/' },
          { from: '/hosting/faq/why-should-I-install-haveged-on-vms/', to: '/hosting/install/advanced/haveged-on-vms/' },
          { from: '/hosting/faq/how-to-install-passbolt-in-non-interactive-mode/', to: '/hosting/install/advanced/non-interactive-mode/' },
          { from: '/hosting/faq/how-to-use-docker-rootless-images/', to: '/hosting/install/ce/docker/rootless-images/' },
          { from: '/hosting/faq/how-to-use-docker-secrets/', to: '/hosting/install/ce/docker/secrets/' },
          { from: '/hosting/faq/where-to-get-help-for-install-issues/', to: '/hosting/' },
          { from: '/hosting/faq/how-to-generate-jwt-key-pair-manually/', to: '/hosting/openpgp/generate-keys-jwt/' },
          { from: '/hosting/faq/generate-openpgp-key/', to: '/hosting/openpgp/generate-keys/' },
          { from: '/hosting/faq/how-to-rotate-server-gpg-keys/', to: '/hosting/openpgp/rotation/' },
          { from: '/hosting/faq/what-are-minimum-server-requirements/', to: '/hosting/requirements/' },
          { from: '/hosting/faq/how-to-increase-auto-logout-time/', to: '/hosting/session-timeout/' },
          { from: '/hosting/faq/how-to-update-my-subscription-key/', to: '/admin/subscription/update-subscription-key/' },

          // Hosting FAQ → stub redirects (deleted pages that were pointers)
          { from: '/hosting/faq/do-you-provide-hosting/', to: '/hosting/' },
          { from: '/hosting/faq/how-can-I-update-my-passbolt-server/', to: '/hosting/update/' },
          { from: '/hosting/faq/how-to-install-passbolt-server/', to: '/hosting/install/' },
          { from: '/hosting/faq/how-to-make-passbolt-backups/', to: '/hosting/maintenance/backup/' },
          { from: '/hosting/faq/how-to-migrate-from-http-to-https/', to: '/hosting/tls/https/' },
          { from: '/hosting/faq/how-to-set-up-ntp/', to: '/hosting/ntp/' },
          { from: '/hosting/faq/why-I-see-unsafe-mode-banner/', to: '/hosting/environment-reference/' },
          { from: '/hosting/faq/how-to-import-ssl-certificate-on-mobile-application/', to: '/user/quickstart/mobile/import-ssl-certificate/' },

          // Hosting troubleshooting → relocated
          { from: '/hosting/troubleshooting/docker/', to: '/hosting/install/pro/docker/troubleshooting/' },
          { from: '/hosting/troubleshooting/helm/', to: '/hosting/install/pro/helm-chart/troubleshooting/' },
          { from: '/hosting/troubleshooting/desktop-app/', to: '/user/quickstart/desktop/troubleshooting/' },
          { from: '/hosting/troubleshooting/email/', to: '/hosting/email/troubleshooting/' },
          { from: '/hosting/troubleshooting/ldap/', to: '/hosting/ldap/troubleshooting/' },
          { from: '/hosting/troubleshooting/logs/', to: '/hosting/maintenance/diagnostics/collect-info/' },
          { from: '/hosting/troubleshooting/performance-tweaks/', to: '/hosting/maintenance/performance/performance-tweaks/' },
          { from: '/hosting/troubleshooting/purge-action-logs/', to: '/hosting/maintenance/performance/purge-action-logs/' },
          { from: '/hosting/troubleshooting/ssl-tls/', to: '/hosting/tls/troubleshooting/' },

          // Hosting backup (top-level → maintenance/backup/)
          { from: '/hosting/backup/', to: '/hosting/maintenance/backup/' },
          { from: '/hosting/backup/from-docker/', to: '/hosting/maintenance/backup/from-docker/' },
          { from: '/hosting/backup/from-packages/', to: '/hosting/maintenance/backup/from-packages/' },
          { from: '/hosting/backup/from-sources/', to: '/hosting/maintenance/backup/from-sources/' },

          // Admin FAQ → relocated
          { from: '/admin/faq/disable-MFA/', to: '/admin/authentication/mfa/disable-mfa/' },
          { from: '/admin/faq/generate-openpgp-key/', to: '/hosting/openpgp/generate-keys/' },
          { from: '/admin/faq/enable-disable-import-export-plugins/', to: '/hosting/environment-reference/' },

          // Admin section renames
          { from: '/admin/server-maintenance/passbolt-api-status/', to: '/admin/passbolt-api-status/' },
          { from: '/admin/password-configuration/password-expiry/', to: '/admin/resource-policies/password-expiry/' },
          { from: '/admin/password-configuration/password-policy/', to: '/admin/resource-policies/password-policy/' },
          { from: '/admin/metadata-encryption/encrypted-metadata/', to: '/admin/resource-types/encrypted-metadata/' },
          { from: '/admin/metadata-encryption/manage-metadata-key/', to: '/admin/resource-types/metadata-key/' },
          { from: '/admin/metadata-encryption/migrate-metadata/', to: '/admin/resource-types/migrate-metadata/' },
          { from: '/admin/metadata-encryption/allowed-content-types/', to: '/admin/resource-types/allowed-content-types/' },

          // Defunct generated-index pages
          { from: '/hosting/faq/', to: '/hosting/' },
          { from: '/hosting/troubleshooting/', to: '/hosting/' },
          { from: '/admin/faq/', to: '/admin/' },
        ],
      },
    ],
  ],
  customFields: {
    footer: {
      slogan:
        'Open source password and credential manager for teams. The all-in-one solution for all types of credentials and built for secure collaboration. Passbolt is versatile and can be self-hosted or cloud-hosted. Built for modern tech teams, trusted by mission-critical organisations, usable by everyone.',
      socialMedia: {
        links: [
          {
            href: ROUTES.GITHUB_ORG_URL,
            icon: {
              alt: 'Our Github account',
              src: 'icons/github.svg',
              width: 20,
              height: 20,
            },
          },
          {
            href: ROUTES.YOUTUBE_URL,
            icon: {
              alt: 'Our Youtube account',
              src: 'icons/youtube.svg',
              width: 26,
              height: 18,
            },
          },
          {
            href: ROUTES.BLUESKY_URL,
            icon: {
              alt: 'Our Bluesky account',
              src: 'icons/bluesky.svg',
              width: 19.92,
              height: 18,
            },
          },
          {
            href: ROUTES.LINKEDIN_URL,
            icon: {
              alt: 'Our LinkedIn account',
              src: 'icons/linkedin.svg',
              width: 20,
              height: 20,
            },
          },
          {
            href: ROUTES.MASTODON_URL,
            icon: {
              alt: 'Our Mastodon account',
              src: 'icons/mastodon.svg',
              width: 19.13,
              height: 20,
            },
          },
          {
            href: ROUTES.REDDIT_URL,
            icon: {
              alt: 'Our Reddit account',
              src: 'icons/reddit.svg',
              width: 20,
              height: 20,
            },
          },
          {
            href: ROUTES.FORUM_URL,
            icon: {
              alt: 'Our Forum',
              src: 'icons/discourse.svg',
              width: 19.42,
              height: 20,
            },
          },
        ],
      },
    },
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'og:type', content: 'website' }],
      image: 'img/og.jpg',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
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
            to: '/user',
            sidebarId: 'userGuideSidebar',
            position: 'left',
            label: 'User guide',
          },
          {
            type: 'docSidebar',
            to: '/admin',
            sidebarId: 'adminGuideSidebar',
            position: 'left',
            label: 'Admin guide',
          },
          {
            type: 'docSidebar',
            to: '/hosting',
            sidebarId: 'hostingGuideSidebar',
            position: 'left',
            label: 'Hosting guide',
          },
          {
            to: '/api',
            position: 'left',
            label: 'API guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'contributeGuideSidebar',
            position: 'left',
            label: 'Contribute guide',
          },
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
        logo: {
          alt: 'Passbolt logo',
          src: 'img/logo.svg',
          width: 180,
          height: 32,
          href: ROUTES.WEBSITE_URL,
        },
        links: footerLinks,
        copyright: `Copyright © ${new Date().getFullYear()} Passbolt S.A. All right reserved.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['bash', 'php'],
      },
    }),
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        language: ['en'],
        highlightSearchTermsOnTargetPage: false,
        explicitSearchResultPath: false,
      },
    ],
  ],
  scripts: [
    {
      src: 'https://consent.cookiebot.com/uc.js',
      defer: true,
      'data-cbid': '900808a8-f178-4994-b2ad-66bf3ccca5f7',
      'data-blockingmode': 'auto',
    },
    {
      src: 'https://plausible.io/js/plausible.js',
      defer: true,
      'data-domain': 'passbolt.com',
    },
  ],
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
        id: 'cookiebot-tracking-configuration',
      },
      innerHTML: `
        function CookiebotCallback_OnAccept() {
          if (Cookiebot.consent.statistics) {
            enableStatisticsCookies();
          } else {
            disableStatisticsCookies();
          }
        }
        function CookiebotCallback_OnDecline() {
          if (!Cookiebot.consent.statistics) {
            disableStatisticsCookies();
          }
        }
        function enableStatisticsCookies() {
          _paq.push(['setCookieConsentGiven']);
        }
        function disableStatisticsCookies() {
          _paq.push(['forgetCookieConsentGiven']);
        }
      `,
    },
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
        id: 'matomo-tag-manager',
      },
      innerHTML: `
        <!-- Matomo Tag Manager -->
        var _mtm = window._mtm = window._mtm || [];
        _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src='https://cdn.matomo.cloud/passbolt.matomo.cloud/container_C0l5nxM2.js'; s.parentNode.insertBefore(g,s);
        <!-- End Matomo Tag Manager -->
      `,
    },
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
        id: 'matomo-analytics',
      },
      innerHTML: `
        <!-- Matomo -->
        var _paq = window._paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        _paq.push(['requireCookieConsent']);
        (function() {
          var u="https://passbolt.matomo.cloud/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '${process.env?.ENV === 'PRODUCTION' ? 1 : 7}']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src='https://cdn.matomo.cloud/passbolt.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
        })();
        <!-- End Matomo Code -->
      `,
    },
  ],
};

module.exports = config;
