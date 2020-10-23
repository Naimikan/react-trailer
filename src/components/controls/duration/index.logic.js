import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import DefaultDuration from './default-duration';

import useVideoRef from '../../../hooks/use-video-ref';

const DurationControl = ({ className, children }) => {
  const [videoRef] = useVideoRef();
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  const childrenToRender = children && children.constructor === Function ? children : () => children;

  useEffect(() => {
    if (videoRef) {
      videoRef.addEventListener('durationchange', () => {
        setDuration(videoRef.duration);
      });

      videoRef.addEventListener('timeupdate', () => {
        setCurrent(videoRef.currentTime);
      });
    }
  }, [videoRef]);

  return (
    <div className={`rtr-player__duration ${className}`}>
      {childrenToRender({ currentTime: current, duration })}
    </div>
  );
};

DurationControl.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
};

DurationControl.defaultProps = {
  className: '',
  children: DefaultDuration,
};

export default DurationControl;
