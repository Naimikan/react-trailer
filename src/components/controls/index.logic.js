import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PlayButton from './play-button';
import Duration from './duration';
import FullscreenButton from './fullscreen-button';
import Progress from './progress';
import VolumeControl from './volume';
import PictureInPictureButton from './picture-in-picture';

const Controls = ({
  className,
  children,
}) => {
  let childrenToRender = children;

  if (!children || children === null) {
    childrenToRender = (
      <Fragment>
        <div className="rtr-player__progress-container">
          <Progress />
        </div>
        <div className="rtr-player__controls-wrapper">
          <div className="rtr-player__controls-left">
            <PlayButton />
            <VolumeControl />
            <Duration />
          </div>
          <div className="rtr-player__controls-right">
            <PictureInPictureButton />
            <FullscreenButton />
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <div className={`rtr-player__controls ${className}`}>
      {childrenToRender}
    </div>
  );
};

Controls.PlayButton = PlayButton;
Controls.Duration = Duration;
Controls.FullscreenButton = FullscreenButton;
Controls.Progress = Progress;
Controls.Volume = VolumeControl;
Controls.PictureInPictureButton = PictureInPictureButton;

Controls.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Controls.defaultProps = {
  className: '',
  children: null,
};

export default Controls;
