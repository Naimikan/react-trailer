import React, { useState } from 'react';
import styled from 'styled-components';

import useVideoRef from '../../../hooks/use-video-ref';

const ProgressContainer = styled.span.attrs({
  className: 'rtr-progress-control__container',
})`
  display: flex;
  overflow: hidden;
  height: 8px;
  background-color: #E1E4E8;
`;

const ProgressBar = styled.span.attrs(({ progress }) => ({
  className: 'rtr-progress-control__bar',
  style: { width: `${progress}%` },
}))`
  background-color: #f42003;

  transition: width 100ms linear;
`;

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

export default ProgressControl;
