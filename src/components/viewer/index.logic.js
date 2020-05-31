import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import VideoSource from './source';
import VideoTrack from './track';

import useVideoRef from '../../hooks/use-video-ref';
import useFullscreenMode from '../../hooks/use-fullscreen-mode';

const Viewer = ({
  autoplay,
  muted,
  loop,
  className,
  url,
  poster,
  nativeControls,
  children,
}) => {
  const [videoRef, setVideoRef] = useVideoRef();
  const [, toggleFullscreen] = useFullscreenMode(videoRef);

  const videoRefCallback = useCallback((node) => {
    if (node !== null) {
      setVideoRef(node);
    }
  }, [setVideoRef]);

  const onClick = () => {
    if (videoRef.paused) {
      videoRef.play();
    } else {
      videoRef.pause();
    }
  };

  const srcAttibutte = url && {
    src: url,
  };

  return (
    <video // eslint-disable-line jsx-a11y/media-has-caption
      className={`rtr-player__viewer ${className}`}
      autoPlay={autoplay && muted}
      muted={muted}
      loop={loop}
      ref={videoRefCallback}
      {...srcAttibutte}
      preload="metadata"
      poster={poster}
      controls={nativeControls}
      onClick={onClick}
      onDoubleClick={toggleFullscreen}
    >
      {children}
    </video>
  );
};

Viewer.Source = VideoSource;
Viewer.Track = VideoTrack;

Viewer.propTypes = {
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  className: PropTypes.string,
  url: PropTypes.string,
  poster: PropTypes.string,
  nativeControls: PropTypes.bool,
  // ToDo: custom validator
  children: PropTypes.node,
};

Viewer.defaultProps = {
  autoplay: false,
  loop: false,
  muted: false,
  className: '',
  url: '',
  poster: '',
  nativeControls: false,
  children: null,
};

export default Viewer;
