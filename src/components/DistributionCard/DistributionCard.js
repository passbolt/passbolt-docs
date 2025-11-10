import useBaseUrl from '@docusaurus/useBaseUrl';
import Badge from '@site/src/components/Badge/Badge';
import Heading from '@theme/Heading';
import PropTypes from 'prop-types';
import styles from './DistributionCard.module.css';

const DistributionCard = ({ logo, name, isNew, version, links, ...props }) => {
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

      {(isNew || (links && (links.ce || links.pro))) && (
        <div className={styles.links}>
          {isNew && <div className={styles.newBadge}>NEW</div>}
          {links?.ce && (
            <Badge className={styles.link} href={links.ce.slug}>
              {links.ce.label}
            </Badge>
          )}
          {links?.pro && (
            <Badge className={styles.link} href={links.pro.slug}>
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
  isNew: PropTypes.bool,
};

DistributionCard.defaultProps = {
  links: null,
  isNew: false,
};

export default DistributionCard;
