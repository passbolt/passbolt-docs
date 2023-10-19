import React from 'react'
import PropTypes from 'prop-types'
import styles from './Video.module.css'

const Video = ({ src, title, caption = null, aspectRatio = null }) => {

  return (
    <figure className={styles.root}>
      <iframe
        style={aspectRatio && { '--video-aspect-ratio': aspectRatio }}
        src={src}
        title={title}
        allowFullScreen
      />
      {caption && (
        <figcaption>{caption}</figcaption>
      )}
    </figure>
  )
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  caption: PropTypes.string,
  aspectRatio: PropTypes.string,
}

export default Video