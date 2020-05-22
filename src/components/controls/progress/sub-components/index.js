import styled from 'styled-components';

const ProgressContainer = styled.span.attrs({
  className: 'rtr-progress-control__container',
})`
  display: flex;
  background-color: #E1E4E8;
  height: 8px;
  overflow: hidden;
`;

const ProgressBar = styled.span.attrs(({ progress }) => ({
  className: 'rtr-progress-control__bar',
  style: { width: `${progress}%` },
}))`
  background-color: #f42003;

  transition: width 100ms linear;
`;

export {
  ProgressContainer,
  ProgressBar,
};
