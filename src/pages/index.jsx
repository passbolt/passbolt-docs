import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHero from '@site/src/components/HomepageHero';
import Layout from '@theme/Layout';

function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={'Passbolt documentation'} description={siteConfig.tagline}>
      <HomepageHero />
    </Layout>
  );
}

export default Home;
