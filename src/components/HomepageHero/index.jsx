import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './HomepageHero.module.css';
import Link from '@docusaurus/Link';
import SearchBar from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar/index.js';

const HomepageHero = () => {

  const guides = [
    {
      id: 'user',
      icon: <img src={useBaseUrl('/icons/lucide/user.svg')} width={24} alt='User guide illustrated with a user icon' />,
      href: '/user',
      title: 'User guide',
      description:
        'All you need to know about the functionalities available to every users.',
    },
    {
      id: 'admin',
      icon: <img src={useBaseUrl('/icons/lucide/settings.svg')} width={24} alt='Admin guide illustrated with a gear icon' />,
      href: '/admin',
      title: 'Admin guide',
      description:
        'All the information for users with the administrator role, e.g. all about the user and admin workspaces',
    },
    {
      id: 'hosting',
      icon: <img src={useBaseUrl('/icons/lucide/server.svg')} width={24} alt='Hosting guide illustrated with a server icon' />,
      href: '/hosting',
      title: 'Hosting guide',
      description:
        'All the technical information related to the setup and update of your passbolt self-hosted server',
    },
    {
      id: 'contributor',
      icon: <img src={useBaseUrl('/icons/lucide/contributor.svg')} width={24} alt='Contributor guide illustrated with a handshake.' />,
      href: 'https://help.passbolt.com/contribute',
      title: 'Contributor guide',
      description:
        'All the information to get started to contribute to the project as a translator, developer, tester, etc.',
    },
    {
      id: 'developer',
      icon: <img src={useBaseUrl('/icons/lucide/developer.svg')} width={24} alt='Contributor guide illustrated with {}.' />,
      href: '/development/api',
      title: 'Developer guide',
      description:
        'All the technical information to integrate and call the passbolt API.',
    },
    {
      id: 'releases',
      icon: <img src={useBaseUrl('/icons/lucide/tag.svg')} width={24} alt='Release notes illustrated with a tag.' />,
      href: 'https://www.passbolt.com/changelog',
      title: 'Release notes',
      description:
        'What was shipped in the latest release? Was it a bug or a feature? Let\'s find out!',
    },
    {
      id: 'incidents',
      icon: <img src={useBaseUrl('/icons/lucide/fire.svg')} width={24} alt='Incident reports illustrated with a fire.' />,
      href: 'https://www.passbolt.com/incidents',
      title: 'Incident reports',
      description:
        'A retrospective of what went wrong and what we did to fix it!',
    },
    {
      id: 'contact',
      icon: <img src={useBaseUrl('/icons/lucide/contact.svg')} width={24} alt='Contact us illustrated with a speech bubble.' />,
      href: 'https://www.passbolt.com/contact',
      title: 'Talk to a human',
      description:
        'If you cannot find what you need here, you can always ask the community or support.',
    },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          Welcome to the passbolt{' '}
          <span className={styles.red}>documentation</span>!
        </h1>

        <h2 className={styles.lead}>
          The documentation for Passbolt contains several main sections, all
          accessible from the top navigation bar or from the links below.
        </h2>

        <div className={styles.search_bar}>
          <SearchBar />
        </div>
      </div>
      <div className={styles.grid}>
        {guides.map((item) => (
          <Link key={item.id} to={item.href} className={styles.card} autoAddBaseUrl>
            {item.icon}
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomepageHero;
