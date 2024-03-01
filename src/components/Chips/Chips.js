import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chips.module.css';
import clsx from "clsx";

const Chips = ({ children, href = null, isUnderMainTitle = false}) => {
  if (!children) return null;

  return (
    <div className={styles["under-main-menu"]}>
      <span className={styles.chips}>{children}</span>
    </div>
  );
};

Chips.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isUnderMainTitle: PropTypes.bool.isRequired
};

export default Chips;
