import React from 'react';
import PropTypes from 'prop-types';
//Reuse the css theme from distribution
import styles from '../DistributionCard/DistributionCard.module.css';
import Badge from '@site/src/components/Badge/Badge';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ImportCard = ({ logo, name, links, ...props }) => {
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
        </h3>
      )}
      {links && (
        <div className={styles.links}>
          {links.map((link, index) => (
            <Badge
              key={index}
              className={clsx([styles.link])}
              href={link.slug}
            >
              {link.label}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

ImportCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImportCard;
