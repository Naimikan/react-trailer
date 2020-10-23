import React, { useState } from 'react';
import PropTypes from 'prop-types';

import VideoPlayerRefContext from '../../context/video-player-ref';
import VideoRefContext from '../../context/video-ref';

import Container from './container';
import Viewer from '../viewer';
import Controls from '../controls';

const VideoPlayer = ({
  className,
  children,
}) => (
  <VideoPlayerRefContext.Provider value={useState()}>
    <VideoRefContext.Provider value={useState()}>
      <Container className={className}>
        {children}
      </Container>
    </VideoRefContext.Provider>
  </VideoPlayerRefContext.Provider>
);

VideoPlayer.Viewer = Viewer;
VideoPlayer.Controls = Controls;

VideoPlayer.propTypes = {
  className: PropTypes.string,
  // ToDo: custom validator
  children: PropTypes.node.isRequired, // ToDo: VideoViewer
};

VideoPlayer.defaultProps = {
  className: '',
};

export default VideoPlayer;
