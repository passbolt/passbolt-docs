import React from 'react';
import clsx from 'clsx';
import styles from './Badge.module.css';
import PropTypes from 'prop-types';
import Link from '@docusaurus/Link';

const Badge = ({ children, href = null, variant = 'primary' }) => {
  if (!children) return null;

  const Tag = href ? 'a' : <Link />;

  return (
    <Tag className={clsx([styles.badge, styles[variant]])} href={href}>
      {children}
    </Tag>
  );
};

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Badge;
