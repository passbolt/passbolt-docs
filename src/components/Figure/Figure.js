import React from 'react'
import PropTypes from 'prop-types'
import styles from './Figure.module.css'
import useBaseUrl from '@docusaurus/useBaseUrl'

const Figure = ({ src, alt, caption = null }) => {

  const imageUrl = useBaseUrl(src)

  return (
    <figure className={styles.root}>
      <img src={imageUrl} alt={alt} />
      {caption && (
        <figcaption>{caption}</figcaption>
      )}
    </figure>
  )
}

Figure.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
}

export default Figure