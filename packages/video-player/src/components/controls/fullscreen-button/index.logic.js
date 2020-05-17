import React from 'react';
import PropTypes from 'prop-types';

import useVideoRef from '../../../hooks/use-video-ref';
import useFullscreenMode from '../../../hooks/use-fullscreen-mode';

const FullscreenButton = ({ className, children }) => {
  const [videoRef] = useVideoRef();
  const [isFullscreen, toggleFullscreen] = useFullscreenMode(videoRef);

  const childrenToRender = children && children.constructor === Function ? children : () => children;

  return (
    <button className={`rtr-player__fullscreen-button ${className}`} onClick={toggleFullscreen}>
      {childrenToRender({ isFullscreen })}
    </button>
  );
};

FullscreenButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
};

FullscreenButton.defaultProps = {
  className: '',
  children: null,
};

export default FullscreenButton;
