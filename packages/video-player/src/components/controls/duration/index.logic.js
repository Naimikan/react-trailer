import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import formatTime from '../../../helpers/format-time';

import useVideoRef from '../../../hooks/use-video-ref';

const DurationControl = ({ className }) => {
  const [videoRef] = useVideoRef();
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (videoRef) {
      videoRef.addEventListener('durationchange', () => {
        setDuration(formatTime(videoRef.duration));
      });

      videoRef.addEventListener('timeupdate', () => {
        setCurrent(formatTime(videoRef.currentTime));
      });
    }
  }, [videoRef]);

  return (
    <div className={`rtr-player__duration ${className}`}>
      <span>{current}/{duration}</span>
    </div>
  );
};

DurationControl.propTypes = {
  className: PropTypes.string,
};

DurationControl.defaultProps = {
  className: '',
};

export default DurationControl;
