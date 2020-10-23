import styled from 'styled-components';

import LogicPlayButton from './index.logic';

const PlayButton = styled(LogicPlayButton)`
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 6px;

  svg {
    height: 1.5rem;
    width: 1.5rem;

    path {
      fill: #fefefe;
    }
  }

  &:hover {
    svg {
      path {
        fill: #4a8fe7;
      }
    }
  }
`;

export default PlayButton;
