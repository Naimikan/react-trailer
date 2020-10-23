import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ProgressContainer, ProgressBar, BufferBar } from './sub-components';

import useVideoRef from '../../../hooks/use-video-ref';

const ProgressControl = ({ className }) => {
  const [currentProgress, setProgress] = useState(0);
  const [currentBuffer, setBuffer] = useState(0);
  const [videoRef] = useVideoRef();

  if (videoRef) {
    videoRef.addEventListener('loadedmetadata', () => {
      if (videoRef.buffered.length !== 0) {
        const initialBufferSize = ((videoRef.buffered.end(0) - videoRef.buffered.start(0)) / videoRef.duration) * 100;
        setBuffer(initialBufferSize);
      }
    });

    videoRef.addEventListener('timeupdate', () => {
      if (videoRef.duration > 0) {
        const cProgress = (videoRef.currentTime * 100) / videoRef.duration;
        setProgress(cProgress);
      }
    });

    videoRef.addEventListener('progress', () => {
      if (videoRef.duration > 0) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < videoRef.buffered.length; i++) {
          const nextBufferSize = ((videoRef.buffered.end(videoRef.buffered.length - 1 - i) - videoRef.buffered.start(0)) / videoRef.duration) * 100;
          setBuffer(nextBufferSize);

          break;
        }
      }
    });
  }

  return (
    <div className={`rtr-player__progress-control ${className}`}>
      <ProgressContainer>
        <ProgressBar progress={currentProgress} />
        <BufferBar buffer={currentBuffer} />
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
