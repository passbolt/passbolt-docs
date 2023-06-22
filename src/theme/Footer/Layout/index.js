import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function FooterLayout({ links, logo, copyright }) {
  const { siteConfig: { customFields } } = useDocusaurusContext();
  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col col--3'>
              {logo && <div className='logo'>{logo}</div>}
              {customFields.footer?.slogan && <p className='slogan'>{customFields.footer.slogan}</p>}

              <div className='social-block'>

                {customFields.footer?.socialMedia?.title && (
                  <p>{customFields.footer.socialMedia.title}</p>
                )}

                {customFields.footer?.socialMedia?.links && (
                  <nav>
                    {customFields.footer.socialMedia.links.map((link) => (
                      <Link key={link.href} to={link.href}>
                        {link.icon?.src && (
                          <img src={useBaseUrl(link.icon.src)} alt={link.icon.alt} width={link.icon.width} height={link.icon.height} />
                        )}
                      </Link>
                    ))}
                  </nav>
                )}
              </div>
            </div>

            <div className='col col--8 col--offset-1'>
              {links}
            </div>
          </div>

          <div className='copyright'>
            {copyright}
          </div>
        </div>
      </footer>
    </>
  );
}
