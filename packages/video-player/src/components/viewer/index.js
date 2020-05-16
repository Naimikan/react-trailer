import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useVideo } from '../../hooks';

const UnstyledVideoViewer = React.forwardRef(({
  autoplay,
  loop,
  className,
  url,
  children,
}, ref) => {
  const [videoRef] = useVideo();

  const onClick = () => {
    if (videoRef.paused) {
      videoRef.play();
    } else {
      videoRef.pause();
    }
  }

  const srcAttibutte = url && {
    src: url,
  };

  return (
    <video // eslint-disable-line jsx-a11y/media-has-caption
      className={`rtr-viewer ${className}`}
      autoPlay={autoplay}
      loop={loop}
      ref={ref}
      {...srcAttibutte}
      preload="metadata"
      onClick={onClick}
    >
      {children}
    </video>
  );
});

UnstyledVideoViewer.Source = styled.source``;

UnstyledVideoViewer.propTypes = {
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  className: PropTypes.string,
  url: PropTypes.string,
  // ToDo: custom validator
  children: PropTypes.node,
};

UnstyledVideoViewer.defaultProps = {
  autoplay: false,
  loop: false,
  className: '',
  url: '',
  children: null,
};

const VideoViewer = styled(UnstyledVideoViewer)`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

export default VideoViewer;
