import React from 'react';
import PropTypes from 'prop-types';

import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';

import Pre from '../pre';

const Code = ({
  language,
  children,
}) => (
  <Highlight {...defaultProps} code={children} language={language} theme={theme}>
    {({ className, style, getLineProps, getTokenProps, tokens }) => (
      <div style={{ position: 'relative' }}>
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      </div>
    )}
  </Highlight>
);


Code.propTypes = {
  language: PropTypes.string,
  children: PropTypes.node,
};

Code.defaultProps = {
  language: 'jsx',
  children: null,
};

export default Code;
