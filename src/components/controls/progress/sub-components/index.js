import styled from 'styled-components';

const ProgressContainer = styled.span.attrs({
  className: 'rtr-progress-control__container',
})`
  display: flex;
  background-color: rgba(255, 255, 255, 0.25);
  height: 4px;
  overflow: hidden;
  z-index: 1;
`;

const ProgressBar = styled.span.attrs(({ progress }) => ({
  className: 'rtr-progress-control__bar',
  style: { width: `${progress}%` },
}))`
  background-color: #4a8fe7;

  transition: width 100ms linear;
  z-index: 3;
`;

const BufferBar = styled.span.attrs(({ buffer }) => ({
  className: 'rtr-progress-control__buffer',
  style: { width: `${buffer}%` },
}))`
  background-color: rgba(255, 255, 255, 0.55);
  height: 4px;
  transition: width 100ms linear;
  position: absolute;
  z-index: 2;
`;

export {
  ProgressContainer,
  ProgressBar,
  BufferBar,
};
