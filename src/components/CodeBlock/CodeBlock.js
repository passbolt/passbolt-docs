import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';

const CodeBlock = ({ children }) => {
  useEffect(() => {
    // This will highlight the code block after the component mounts
    Prism.highlightAll();
  }, []); // Empty dependency array means this runs once on mount

  if (!children) return null;

  return (
    <pre className="language-bash">
      <code>{children}</code>
    </pre>
  );
};

CodeBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CodeBlock;
