import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createNewVideoRef } from '../../helpers';

import VideoContext from '../../context';

import VideoViewer from '../viewer';

const UnstyledVideoPlayer = ({ id, className, children }) => {
  const [stateId] = useState(id || `rtr-${Date.now()}`);
  const [videoRef] = useState(createNewVideoRef(stateId));

  const childrenArray = React.Children.toArray(children);
  const videoViewerChild = childrenArray.find(element => element.type === VideoViewer);
  const otherChildren = childrenArray.filter(element => element.type !== VideoViewer);

  return (
    <VideoContext.Provider value={{ id: stateId }}>
      <div id={stateId} className={`rtr-player ${className}`}>
        {React.cloneElement(videoViewerChild, { ref: videoRef })}
        {otherChildren}
      </div>
    </VideoContext.Provider>
  );
};

UnstyledVideoPlayer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  // ToDo: custom validator
  children: PropTypes.node.isRequired,
};

UnstyledVideoPlayer.defaultProps = {
  id: '',
  className: '',
};

const VideoPlayer = styled(UnstyledVideoPlayer)`
  background-color: #333;
  display: block;
  box-sizing: border-box;
  position: relative;
  
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

VideoPlayer.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

VideoPlayer.defaultProps = {
  width: 600,
  height: 480,
};

export default VideoPlayer;
