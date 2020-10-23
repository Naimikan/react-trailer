import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import useVideoRef from '../../../hooks/use-video-ref';

import OpenPictureIcon from './open-picture-icon';
import ClosePictureIcon from './close-picture-icon';

const PictureInPictureButton = ({
  className,
  children,
}) => {
  const [videoRef] = useVideoRef();
  const [isPictureInPicture, setIsPictureInPicture] = useState(false);

  let childrenToRender;

  if (children && children !== null) {
    childrenToRender = children.constructor === Function ? children : () => children;
  } else {
    // eslint-disable-next-line react/prop-types
    childrenToRender = ({ isPictureInPicture: isPictureInPictureParam }) => (
      <Fragment>
        {isPictureInPictureParam && <ClosePictureIcon />}
        {!isPictureInPictureParam && <OpenPictureIcon />}
      </Fragment>
    );
  }

  useEffect(() => {
    if (videoRef) {
      videoRef.addEventListener('enterpictureinpicture', () => {
        setIsPictureInPicture(true);
      });

      videoRef.addEventListener('leavepictureinpicture', () => {
        setIsPictureInPicture(false);
      });
    }
  }, [videoRef]);

  const pictureInPicture = () => {
    if (document.pictureInPictureEnabled && !videoRef.disablePictureInPicture) {
      try {
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture();
        }

        videoRef.requestPictureInPicture();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return document.pictureInPictureEnabled ? (
    <button className={`rtr-player__picture-in-picture-button ${className}`} onClick={pictureInPicture}>
      {childrenToRender({ isPictureInPicture })}
    </button>
  ) : null;
};

PictureInPictureButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
};

PictureInPictureButton.defaultProps = {
  className: '',
  children: null,
};

export default PictureInPictureButton;
