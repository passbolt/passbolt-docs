import useBaseUrl from '@docusaurus/useBaseUrl';
import PropTypes from 'prop-types';
import styles from './Figure.module.css';

const Figure = ({ src, alt, caption = null, size = {} }) => {
  const imageUrl = useBaseUrl(src);
  const imageStyle =
    size.width || size.height ? { width: size.width, height: size.height } : {};

  return (
    <figure className={styles.root}>
      <img src={imageUrl} alt={alt} style={imageStyle} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

Figure.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  size: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default Figure;
