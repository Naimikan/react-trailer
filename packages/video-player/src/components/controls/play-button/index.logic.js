import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useVideoRef from '../../../hooks/use-video-ref';

const PlayButton = ({ className, children }) => {
  const [videoRef] = useVideoRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const childrenToRender = children && children.constructor === Function ? children : () => children;

  useEffect(() => {
    if (videoRef) {
      videoRef.addEventListener('play', () => {
        setIsPlaying(true);
      });

      videoRef.addEventListener('pause', () => {
        setIsPlaying(false);
      });
    }
  }, [videoRef]);

  const playPause = () => {
    if (videoRef.paused) {
      videoRef.play();
    } else {
      videoRef.pause();
    }
  };

  return (
    <button className={`rtr-player__play-button ${className}`} type="button" onClick={playPause}>
      {childrenToRender({ isPlaying })}
    </button>
  );
};

PlayButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
};

PlayButton.defaultProps = {
  className: '',
  children: null,
};

export default PlayButton;
