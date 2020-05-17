import styled from 'styled-components';
import PropTypes from 'prop-types';

import LogicVideoPlayer from './index.logic';

const VideoPlayer = styled(LogicVideoPlayer)`
  background-color: #333;
  box-sizing: border-box;
  display: block;
  position: relative;
  
  ${({ height, width }) => `
    height: ${height}px;
    width: ${width}px;
  `}
`;

VideoPlayer.propTypes = {
  ...LogicVideoPlayer.propTypes,
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
  ...LogicVideoPlayer.defaultProps,
  width: 600,
  height: 480,
};

export default VideoPlayer;
