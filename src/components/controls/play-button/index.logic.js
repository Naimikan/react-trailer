import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import useVideoRef from '../../../hooks/use-video-ref';

import PlayIcon from './play-icon';
import PauseIcon from './pause-icon';

const PlayButton = ({ className, children }) => {
  const [videoRef] = useVideoRef();
  const [isPlaying, setIsPlaying] = useState(false);

  let childrenToRender;

  if (children && children !== null) {
    childrenToRender = children.constructor === Function ? children : () => children;
  } else {
    // eslint-disable-next-line react/prop-types
    childrenToRender = ({ isPlaying: isPlayingParam }) => (
      <Fragment>
        {isPlayingParam && <PauseIcon />}
        {!isPlayingParam && <PlayIcon />}
      </Fragment>
    );
  }

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
    <button className={`rtr-player__play-button ${className}`} onClick={playPause}>
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
