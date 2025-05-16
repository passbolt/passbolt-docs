// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarConfig}
 */
const contributeGuideSidebar = [
  {
    type: 'doc',
    id: 'contribute/index',
    label: 'Overview',
  },
  {
    type: 'category',
    label: 'Translator',
    items: [
      {
        type: 'doc',
        id: 'contribute/translator/translate',
        label: 'Translation',
      },
      {
        type: 'doc',
        id: 'contribute/translator/proofread',
        label: 'Proofreading',
      },
      {
        type: 'doc',
        id: 'contribute/translator/externalize',
        label: 'Externalizing Strings',
      },
    ],
  },
  {
    type: 'category',
    label: 'Developer',
    items: [
      {
        type: 'doc',
        id: 'contribute/developer/feature-request',
        label: 'Feature Request',
      },
      {
        type: 'doc',
        id: 'contribute/developer/bug-report',
        label: 'Bug Report',
      },
      {
        type: 'doc',
        id: 'contribute/developer/setup',
        label: 'Setting up Environment',
      },
    ],
  },
  {
    type: 'category',
    label: 'Security Researcher',
    items: [
      {
        type: 'doc',
        id: 'contribute/security/index',
        label: 'Overview',
      },
      {
        type: 'doc',
        id: 'contribute/security/vulnerability',
        label: 'Report a Vulnerability',
      },
      {
        type: 'doc',
        id: 'contribute/security/bug-bounty',
        label: 'Bug Bounty Program',
      },
    ],
  },
];

module.exports = contributeGuideSidebar;
