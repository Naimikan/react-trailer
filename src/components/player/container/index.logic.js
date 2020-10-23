import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import useVideoPlayerRef from '../../../hooks/use-video-player-ref';
import useFullscreenMode from '../../../hooks/use-fullscreen-mode';

const Container = ({
  className,
  children,
}) => {
  const [videoPlayerRef, setVideoPlayerRef] = useVideoPlayerRef();
  const [, toggleFullscreen] = useFullscreenMode(videoPlayerRef);

  const videoPlayerRefCallback = useCallback((node) => {
    if (node !== null) {
      setVideoPlayerRef(node);
    }
  }, [setVideoPlayerRef]);

  return (
    <div ref={videoPlayerRefCallback} className={`rtr-player ${className}`} onDoubleClick={toggleFullscreen}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  // ToDo: custom validator
  children: PropTypes.node.isRequired, // ToDo: VideoViewer
};

Container.defaultProps = {
  className: '',
};

export default Container;
