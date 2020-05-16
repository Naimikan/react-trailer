import React, { useState } from 'react';
import styled from 'styled-components';

import { useVideo } from '../../../hooks';

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
`;

const UnstyledProgress = ({ className }) => {
  const [currentProgress, setProgress] = useState(0);
  const [videoRef] = useVideo();

  if (videoRef) {
    videoRef.addEventListener('timeupdate', () => {
      const cProgress = (videoRef.currentTime * 100) / videoRef.duration;
      setProgress(cProgress);
    });
  }

  return (
    <div className={`rtr-progress-control ${className}`}>
      <ProgressContainer>
        <ProgressBar progress={currentProgress} />
      </ProgressContainer>
    </div>
  );
};

const VideoProgress = styled(UnstyledProgress)``;

export default VideoProgress;
