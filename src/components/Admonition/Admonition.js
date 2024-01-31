import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Admonition = ({ type, children }) => {
  if (!children) return null;

  return (
    <pre className="language-bash">
      <code>{children}</code>
    </pre>
  );
};

Admonition.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Admonition;
