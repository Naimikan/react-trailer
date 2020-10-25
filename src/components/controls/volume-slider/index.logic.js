import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useVideoRef from '../../../hooks/use-video-ref';

const VolumeSliderControl = ({ className }) => {
  const [videoRef] = useVideoRef();
  const [currentVolume, setCurrentVolume] = useState(0);

  useEffect(() => {
    if (videoRef) {
      setCurrentVolume(videoRef.volume * 100);

      videoRef.addEventListener('volumechange', () => {
        if (!videoRef.muted) {
          setCurrentVolume(videoRef.volume * 100);
        } else {
          setCurrentVolume(0);
        }
      });
    }
  }, [videoRef]);

  const onChangeVolume = (event) => {
    videoRef.volume = (event.target.value / 100);
  };

  return (
    <input
      className={`rtr-player__volume-slider-control ${className}`}
      type="range"
      step="1"
      min="0"
      max="100"
      value={currentVolume}
      onInput={onChangeVolume}
      onChange={onChangeVolume}
    />
  );
};

VolumeSliderControl.propTypes = {
  className: PropTypes.string,
};

VolumeSliderControl.defaultProps = {
  className: '',
};

export default VolumeSliderControl;
