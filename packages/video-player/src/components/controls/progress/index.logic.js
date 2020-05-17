import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ProgressContainer, ProgressBar } from './sub-components';

import useVideoRef from '../../../hooks/use-video-ref';

const ProgressControl = ({ className }) => {
  const [currentProgress, setProgress] = useState(0);
  const [videoRef] = useVideoRef();

  if (videoRef) {
    videoRef.addEventListener('timeupdate', () => {
      const cProgress = (videoRef.currentTime * 100) / videoRef.duration;
      setProgress(cProgress);
    });
  }

  return (
    <div className={`rtr-player__progress-control ${className}`}>
      <ProgressContainer>
        <ProgressBar progress={currentProgress} />
      </ProgressContainer>
    </div>
  );
};

ProgressControl.propTypes = {
  className: PropTypes.string,
};

ProgressControl.defaultProps = {
  className: '',
};

export default ProgressControl;
