import React from 'react';
import PropTypes from 'prop-types';
import styles from './DistributionCard.module.css';
import Badge from '@site/src/components/Badge/Badge';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

const DistributionCard = ({ logo, name, version, links, ...props }) => {
  const imageUrl = useBaseUrl(logo);

  return (
    <div className={styles.root} {...props}>
      {logo && (
        <div className={styles.logo}>
          <img src={imageUrl} />
        </div>
      )}

      {name && (
        <h3 className={styles.name}>
          {name}
          {version && ` ${version}`}
        </h3>
      )}

      {links && (
        <div className={styles.links}>
          {links.ce && (
            <Badge
              className={clsx([styles.link, styles.linkCe])}
              href={links.ce}
            >
              CE
            </Badge>
          )}
          {links.pro && (
            <Badge
              className={clsx([styles.link, styles.linkPro])}
              href={links.pro}
              variant="secondary"
            >
              Pro
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
  version: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  links: PropTypes.shape({
    ce: PropTypes.string,
    pro: PropTypes.string,
  }).isRequired,
};

export default DistributionCard;
