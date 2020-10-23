import styled from 'styled-components';
import PropTypes from 'prop-types';

import LogicContainer from './index.logic';

const Container = styled(LogicContainer)`
  background-color: #333;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  
  ${({ height, width }) => `
    ${height ? `height: ${height};` : ''}
    ${width ? `width: ${width};` : ''}
  `}
`;

Container.propTypes = {
  ...LogicContainer.propTypes,
  width: PropTypes.string,
  height: PropTypes.string,
};

Container.defaultProps = {
  ...LogicContainer.defaultProps,
  width: '',
  height: '',
};

export default Container;
