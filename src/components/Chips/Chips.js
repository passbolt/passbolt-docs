import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chips.module.css';
import Link from "@docusaurus/Link";

const Chips = ({ children, href = null, link = "", isUnderMainTitle = false}) => {
  if (!children) return null;
  const hasLink = link.length > 0;

  return (
    <div className={`${isUnderMainTitle ? styles["under-main-menu"] : ''}`}>
      {hasLink &&
        <Link className={`${styles.chips} ${styles.link}`} to={link} target="_blank">{children}</Link>
      }
      {!hasLink &&
        <span className={styles.chips}>{children}</span>
      }
    </div>
  );
};

Chips.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isUnderMainTitle: PropTypes.bool.isRequired,
  link: PropTypes.string
};

export default Chips;
