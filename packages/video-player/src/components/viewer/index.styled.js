import styled from 'styled-components';

import LogicViewer from './index.logic';

const Viewer = styled(LogicViewer)`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

Viewer.propTypes = LogicViewer.propTypes;
Viewer.defaultProps = LogicViewer.defaultProps;

export default Viewer;
