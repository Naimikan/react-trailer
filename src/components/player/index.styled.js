import styled from 'styled-components';
import PropTypes from 'prop-types';

import LogicVideoPlayer from './index.logic';

const VideoPlayer = styled(LogicVideoPlayer)`
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
