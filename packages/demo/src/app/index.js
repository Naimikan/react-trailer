import React from 'react';
import styled from 'styled-components';

import {
  VideoPlayer,
  Viewer,
  Controls,
  PlayButton,
  FullscreenButton,
  ProgressControl,
  DurationControl,
} from 'react-trailer';

const StyledProgressControl = styled(ProgressControl)`
  .rtr-progress-control__container {
    height: 4px;
    transition: height 250ms ease-in;
  }

  ${Controls}:hover & {
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

  ${Controls}:hover & {
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
    <VideoPlayer>
      <Viewer>
        <Viewer.Source src="https://dl5.webmfiles.org/big-buck-bunny_trailer.webm" type="video/webm" /> 
      </Viewer>
      <Controls>
        <ProgressControl />
        <PlayButton>
          {({ isPlaying }) => (isPlaying ? 'Pause' : 'Play')}
        </PlayButton>
        <FullscreenButton>Fullscreen</FullscreenButton>
        <DurationControl />
      </Controls>
    </VideoPlayer>

    <VideoPlayer>
      <Viewer>
        <Viewer.Source src="http://dl5.webmfiles.org/elephants-dream.webm" type="video/webm" /> 
      </Viewer>
      <Controls>
        <ProgressControl />
        <PlayButton>
          {({ isPlaying }) => (isPlaying ? 'Pause' : 'Play')}
        </PlayButton>
        <FullscreenButton>Fullscreen</FullscreenButton>
        <DurationControl />
      </Controls>
    </VideoPlayer>

    <div>
      <StyledVideoPlayer>
        <Viewer loop>
          <Viewer.Source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" /> 
          <Viewer.Source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" /> 
          <Viewer.Source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
          <Viewer.Source src="http://techslides.com/demos/sample-videos/small.3gp" type="video/3gp" />
        </Viewer>
        <Controls>
          <StyledProgressControl />
          <StyledControlsContent>
            <PlayButton>Play</PlayButton>
            <FullscreenButton>Fullscreen</FullscreenButton>
          </StyledControlsContent>
        </Controls>
      </StyledVideoPlayer>
    </div>
  </div>
);

export default App;
