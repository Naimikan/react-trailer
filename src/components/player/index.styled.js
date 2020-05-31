import styled from 'styled-components';
import PropTypes from 'prop-types';

import LogicVideoPlayer from './index.logic';

const VideoPlayer = styled(LogicVideoPlayer)`
  background-color: #333;
  box-sizing: border-box;
  display: block;
  position: relative;
  
  ${({ height, width }) => `
    ${height ? `height: ${height};` : ''}
    ${width ? `width: ${width};` : ''}
  `}
`;

VideoPlayer.propTypes = {
  ...LogicVideoPlayer.propTypes,
  width: PropTypes.string,
  height: PropTypes.string,
};

VideoPlayer.defaultProps = {
  ...LogicVideoPlayer.defaultProps,
  width: '',
  height: '',
};

export default VideoPlayer;
