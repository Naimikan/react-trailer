import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useVideoRef, useVideoId } from '../../hooks';

const UnstyledVideoViewer = React.forwardRef(({ className, url }, ref) => {
  const id = useVideoId();
  const [videoRef] = useVideoRef(id);

  const onClick = () => {
    if (videoRef.paused) {
      videoRef.play();
    } else {
      videoRef.pause();
    }
  }

  return (
    <video // eslint-disable-line jsx-a11y/media-has-caption
      className={`rtr-viewer ${className}`}
      ref={ref}
      src={url}
      preload="metadata"
      onClick={onClick}
    />
  );
});

UnstyledVideoViewer.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
};

UnstyledVideoViewer.defaultProps = {
  className: '',
};

const VideoViewer = styled(UnstyledVideoViewer)`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

export default VideoViewer;
