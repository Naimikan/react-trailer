import React from 'react';
import PropTypes from 'prop-types';

import formatTime from '../../../../helpers/format-time';

const DefaultDuration = ({ currentTime, duration }) => (
  <div className="rtr-player__default-duration">
    <span>{formatTime(currentTime)}</span>
    <span>/</span>
    <span>{formatTime(duration)}</span>
  </div>
);

DefaultDuration.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
};

DefaultDuration.defaultProps = {
  currentTime: 0,
  duration: 0,
};

export default DefaultDuration;
