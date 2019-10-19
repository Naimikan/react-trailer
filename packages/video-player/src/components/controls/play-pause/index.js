import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useVideoRef, useVideoId } from '../../../hooks';

const PlayPause = () => {
  const id = useVideoId();
  const [videoRef] = useVideoRef(id);

  const [isPaused, setIsPaused] = useState(true);

  if (videoRef) {
    videoRef.addEventListener('play', () => {
      setIsPaused(false);
    });

    videoRef.addEventListener('pause', () => {
      setIsPaused(true);
    });
  }

  return isPaused ? 'Play' : 'Pause';
};

const UnstyledVideoPlayPause = ({ className }) => {
  const id = useVideoId();
  const [videoRef] = useVideoRef(id);

  const handler = () => {
    if (videoRef.paused) {
      videoRef.play();
    } else {
      videoRef.pause();
    }
  };

  return (
    <button className={className} type="button" onClick={handler}>
      <PlayPause />
    </button>
  );
};

UnstyledVideoPlayPause.propTypes = {
  className: PropTypes.string,
};

UnstyledVideoPlayPause.defaultProps = {
  className: '',
};

const VideoPlayPause = styled(UnstyledVideoPlayPause)`

`;

export default VideoPlayPause;
