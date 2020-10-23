import styled from 'styled-components';

import LogicViewer from './index.logic';

import Controls from '../controls';

const Viewer = styled(LogicViewer)`
  display: inline-block;
  height: 100%;
  width: 100%;

  &:fullscreen + ${Controls} {
    position: absolute;
  }
`;

Viewer.propTypes = LogicViewer.propTypes;
Viewer.defaultProps = LogicViewer.defaultProps;

export default Viewer;
