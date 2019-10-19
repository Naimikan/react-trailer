import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoControls = styled.div.attrs({
  className: 'rtr-controls',
})`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export default VideoControls;
