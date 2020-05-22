import styled from 'styled-components';

import LogicViewer from './index.logic';

const Viewer = styled(LogicViewer)`
  display: inline-block;
  height: 100%;
  width: 100%;
`;

Viewer.propTypes = LogicViewer.propTypes;
Viewer.defaultProps = LogicViewer.defaultProps;

export default Viewer;
