import React from 'react';
import PropTypes from 'prop-types';
import styles from './DistributionCard.module.css';
import Badge from '@site/src/components/Badge/Badge';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';

const DistributionCard = ({ logo, name, version, links, ...props }) => {
  const imageUrl = useBaseUrl(logo);

  return (
    <div className={styles.root} {...props}>
      {logo && (
        <div className={styles.logo}>
          <img src={imageUrl} alt={name} />
        </div>
      )}

      {name && (
        <Heading as="h3" className={styles.name}>
          {name}
          {version && ` ${version}`}
        </Heading>
      )}

      {links && (
        <div className={styles.links}>
          {links.ce && (
            <Badge
              className={styles.link}
              href={links.ce.slug}
            >
              {links.ce.label}
            </Badge>
          )}
          {links.pro && (
            <Badge
              className={styles.link}
              href={links.pro.slug}
            >
              {links.pro.label}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

DistributionCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  version: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  links: PropTypes.shape({
    ce: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
    pro: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  }),
};

export default DistributionCard;