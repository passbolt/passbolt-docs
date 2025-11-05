import CodeBlock from '@theme/CodeBlock';
import PropTypes from 'prop-types';

const CodeBlockComponent = ({ children }) => {
  if (!children) return null;

  return <CodeBlock className="bash">{children}</CodeBlock>;
};

CodeBlockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CodeBlockComponent;
