import React, { useState } from 'react';
import PropTypes from 'prop-types';

import VideoContext from '../../context';

const VideoPlayer = React.forwardRef(({
  className,
  children,
}, ref) => (
  <VideoContext.Provider value={useState()}>
    <div ref={ref} className={`rtr-player ${className}`}>
      {children}
    </div>
  </VideoContext.Provider>
));

VideoPlayer.propTypes = {
  className: PropTypes.string,
  // ToDo: custom validator
  children: PropTypes.node.isRequired, // ToDo: VideoViewer
};

VideoPlayer.defaultProps = {
  className: '',
};

export default VideoPlayer;
