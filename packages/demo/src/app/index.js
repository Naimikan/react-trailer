import React from 'react';
import styled from 'styled-components';

import {
  VideoPlayer,
  VideoViewer,
  VideoControls,
  VideoPlayPause,
  VideoProgress,
} from 'react-trailer';

const StyledVideoProgress = styled(VideoProgress)`
  .rtr-progress-control__container {
    height: 4px;
    transition: height 250ms ease-in;
  }

  ${VideoControls}:hover & {
    .rtr-progress-control__container {
      height: 8px;
    }
  }
`;

const StyledControlsContent = styled.div`
  height: auto;
  max-height: 0;
  overflow: hidden;
  background-color: #3d3d3d;

  padding: 0 8px;

  transition: max-height 250ms ease-in, padding 250ms ease-in;

  ${VideoControls}:hover & {
    max-height: 250px;
    padding: 8px;
  }
`;

const StyledVideoPlayer = styled(VideoPlayer)`
  border-radius: 4px;
  overflow: hidden;
`;

const App = () => (
  <div>
    <StyledVideoPlayer>
      <VideoViewer autoplay loop>
        <VideoViewer.Source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" /> 
        <VideoViewer.Source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" /> 
        <VideoViewer.Source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
        <VideoViewer.Source src="http://techslides.com/demos/sample-videos/small.3gp" type="video/3gp" />
      </VideoViewer>
      <VideoControls>
        <StyledVideoProgress />
        <StyledControlsContent>
          <VideoPlayPause />
        </StyledControlsContent>
      </VideoControls>
    </StyledVideoPlayer>
    <div>aohoahg</div>
  </div>
);

export default App;
