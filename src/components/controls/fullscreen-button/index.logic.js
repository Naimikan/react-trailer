import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import useVideoPlayerRef from '../../../hooks/use-video-player-ref';
import useFullscreenMode from '../../../hooks/use-fullscreen-mode';

import FullscreenIcon from './fullscreen-icon';
import FullscreenExitIcon from './fullscreen-exit-icon';

const FullscreenButton = ({ className, children }) => {
  const [videoPlayerRef] = useVideoPlayerRef();
  const [isFullscreen, toggleFullscreen] = useFullscreenMode(videoPlayerRef);

  let childrenToRender;

  if (children && children !== null) {
    childrenToRender = children.constructor === Function ? children : () => children;
  } else {
    // eslint-disable-next-line react/prop-types
    childrenToRender = ({ isFullscreen: isFullscreenParam }) => (
      <Fragment>
        {isFullscreenParam && <FullscreenExitIcon />}
        {!isFullscreenParam && <FullscreenIcon />}
      </Fragment>
    );
  }

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
