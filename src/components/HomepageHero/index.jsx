import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './HomepageHero.module.css';
import Link from '@docusaurus/Link';
import Icon from '@site/src/components/Icon';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const HomepageHero = () => {
  const { siteConfig } = useDocusaurusContext();

  const sidebarData = siteConfig.themeConfig?.navbar?.items || [];

  const getSidebarUrl = (sidebarId, fallback) => {
    const { href = fallback } = sidebarData.filter(
      (sidebar) => sidebar.sidebarId === sidebarId,
    )[0];

    return href;
  };

  const guides = [
    {
      id: 'user',
      icon: 'user',
      href: useBaseUrl(getSidebarUrl('userGuideSidebar', '/user')),
      title: 'User guide',
      description:
        'All you need to know about the functionalities available to every users.',
    },
    {
      id: 'hosting',
      icon: 'server',
      href: useBaseUrl(getSidebarUrl('hostingGuideSidebar', '/hosting')),
      title: 'Hosting guide',
      description:
        'All the technical information related to the setup and update of your passbolt self-hosted server',
    },
    {
      id: 'admin',
      icon: 'settings',
      href: useBaseUrl(getSidebarUrl('adminGuideSidebar', '/admin')),
      title: 'Admin guide',
      description:
        'All the information for users with the administrator role, e.g. all about the user and admin workspaces',
    },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.headings}>
        <h1 className={styles.heading}>
          Welcome to the passbolt{' '}
          <span className={styles.red}>documentation</span>!
        </h1>

        <h2 className={styles.lead}>
          The documentation for Passbolt contains several main sections, all
          accessible from the top navigation bar or from the links below.
        </h2>
      </div>
      <div className={styles.grid}>
        {guides.map((item) => (
          <Link key={item.id} to={item.href} className={styles.card}>
            <Icon name={item.icon} stroke="#d40101" />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomepageHero;
