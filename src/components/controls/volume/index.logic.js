import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import useVideoRef from '../../../hooks/use-video-ref';

import NoVolumeIcon from './no-volume-icon';
import MidVolumeIcon from './mid-volume-icon';
import MuteOnIcon from './mute-on-icon';
import MuteOffIcon from './mute-off-icon';

const VolumeControl = ({
  className,
  children,
}) => {
  const [videoRef] = useVideoRef();
  const [currentVolume, setCurrentVolume] = useState();
  const [isMuted, setIsMuted] = useState(false);

  let childrenToRender;

  if (children && children !== null) {
    childrenToRender = children.constructor === Function ? children : () => children;
  } else {
    // eslint-disable-next-line react/prop-types
    childrenToRender = ({ isMuted: isMutedParam, volume: volumeParam }) => (
      <Fragment>
        {isMutedParam && <MuteOnIcon />}
        {(!isMutedParam && volumeParam === 1) && <MuteOffIcon />}
        {(!isMutedParam && volumeParam !== 1 && volumeParam !== 0) && <MidVolumeIcon />}
        {(!isMutedParam && volumeParam === 0) && <NoVolumeIcon />}
      </Fragment>
    );
  }

  useEffect(() => {
    if (videoRef) {
      setCurrentVolume(videoRef.volume);

      videoRef.addEventListener('volumechange', () => {
        if (!videoRef.muted) {
          setCurrentVolume(videoRef.volume);
        }
      });
    }
  }, [videoRef]);

  const mute = () => {
    if (videoRef.muted) {
      videoRef.muted = false;
      setIsMuted(false);
    } else {
      videoRef.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <button className={`rtr-player__volume-control ${className}`} onClick={mute}>
      {childrenToRender({ isMuted, volume: currentVolume })}
    </button>
  );
};

VolumeControl.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
};

VolumeControl.defaultProps = {
  className: '',
  children: null,
};

export default VolumeControl;
