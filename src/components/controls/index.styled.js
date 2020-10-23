import styled from 'styled-components';

import LogicControls from './index.logic';

const Controls = styled(LogicControls)`
  background-color: rgba(26, 26, 26, 0.75);
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  width: 100%;

  .rtr-player__progress-container,
  .rtr-player__controls-wrapper {
    width: 100%;
  }

  .rtr-player__controls-wrapper {
    display: flex;

    .rtr-player__controls-left {
      display: flex;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .rtr-player__controls-right {
      display: flex;
      float: right;
    }
  }
`;

Controls.propTypes = LogicControls.propTypes;
Controls.defaultProps = LogicControls.defaultProps;

export default Controls;
