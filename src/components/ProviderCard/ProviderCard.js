import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProviderCard.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ProviderCard = ({ logo, name, slug, ...props }) => {
  const imageUrl = useBaseUrl(logo);

  return (
    <a className={styles.providerCard} href={slug} title={name} {...props}>
      <div className={styles.root}>
        <div className={styles.logo}>
          <img src={imageUrl} />
        </div>
        <h3 className={styles.name}>{name}</h3>
      </div>
    </a>
  );
};

ProviderCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProviderCard;
