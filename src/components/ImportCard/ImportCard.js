import PropTypes from 'prop-types';
// Reuse the css theme from distribution
import useBaseUrl from '@docusaurus/useBaseUrl';
import Badge from '@site/src/components/Badge/Badge';
import Heading from '@theme/Heading'; // Import the Heading component
import clsx from 'clsx';
import styles from '../DistributionCard/DistributionCard.module.css';

const ImportCard = ({ logo, name, links, ...props }) => {
  const imageUrl = useBaseUrl(logo);

  return (
    <div className={styles.root} {...props}>
      {logo && (
        <div className={styles.logo}>
          <img src={imageUrl} alt={`${name} logo`} />
        </div>
      )}

      {name && (
        <Heading as="h3" className={styles.name}>
          {name}
        </Heading>
      )}
      {links && (
        <div className={styles.links}>
          {links.map((link) => (
            <Badge
              key={link.label}
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
  links: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImportCard;
