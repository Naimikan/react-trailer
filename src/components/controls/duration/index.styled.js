import styled from 'styled-components';

import LogicDurationControl from './index.logic';

const DurationControl = styled(LogicDurationControl)`
  display: flex;

  .rtr-player__default-duration {
    align-items: center;
    color: #fefefe;
    display: flex;
    font-size: 14px;
    text-indent: 2px;
    user-select: none;
  }
`;

export default DurationControl;
