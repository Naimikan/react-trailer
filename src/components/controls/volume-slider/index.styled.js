import styled from 'styled-components';

import LogicVolumeSliderControl from './index.logic';

const VolumeSliderControl = styled(LogicVolumeSliderControl)`
  -webkit-appearance: none;
  background: transparent;
  width: 60px;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #fefefe;
    border-radius: 50%;
    cursor: pointer;
    height: 0.75rem;
    margin-top: -0.25rem;
    width: 0.75rem;
  }

  &::-ms-track {
    background: transparent; 
    border-color: transparent;
    color: transparent;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    background: #fefefe;
    border-radius: 50%;
    cursor: pointer;
    height: 0.75rem;
    width: 0.75rem;
  }

  &::-ms-thumb {
    background: #fefefe;
    cursor: pointer;
    height: 0.75rem;
    width: 0.75rem;
  }

  &::-webkit-slider-runnable-track {
    background: #fefefe;
    border-radius: 6px;
    cursor: pointer;
    height: 0.25rem;
  }

  &:active::-webkit-slider-runnable-track {
    background: #ddd;
  }

  &::-moz-range-track {
    background: #fefefe;
    border-radius: 6px;
    cursor: pointer;
    height: 0.25rem;
  }
`;

export default VolumeSliderControl;
