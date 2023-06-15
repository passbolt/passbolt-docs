import React from 'react'
import PageLayout from '../components/layouts/PageLayout';
import { usePluginData } from '@docusaurus/useGlobalData';

export default function Home() {
  const content = usePluginData('docusaurus-plugin-content-docs');

  console.log(content);

  return (
    <PageLayout
      title={'test'}
    >
      <div className='container'>
        <h1>Test</h1>

        {/* {
          releases.map((release) => (
            <div key={release.id}>
              <h2>{release.frontMatter.title}</h2>
              <p>Version: {release.frontMatter.version}</p>
            </div>
          ))
        } */}
      </div>
    </PageLayout>
  );
}