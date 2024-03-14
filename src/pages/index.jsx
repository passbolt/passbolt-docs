import React from 'react';
import Layout from '@theme/Layout';
import HomepageHero from '@site/src/components/HomepageHero';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHero />
    </Layout>
  );
}

export default Home;
