import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import PropTypes from 'prop-types';
import styles from './ProviderCard.module.css';

const ProviderCard = ({ logo, name, slug, ...props }) => {
  const imageUrl = useBaseUrl(logo);

  return (
    <Link className={styles.providerCard} to={slug} title={name} {...props}>
      <div className={styles.root}>
        <div className={styles.logo}>
          <img src={imageUrl} alt={`${name} logo`} />
        </div>
        <Heading as="h3" className={styles.name}>
          {name}
        </Heading>
      </div>
    </Link>
  );
};

ProviderCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProviderCard;
