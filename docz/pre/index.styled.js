import styled from 'styled-components';

const Pre = styled.pre`
  border: 1px solid var(--theme-ui-colors-playground-border, #CED4DE);
  border-radius: 6px;
  font-family: Inconsolata;
  font-size: 18px;
  padding: 18px;

  > div {
    overflow-wrap: break-word;
    white-space: pre-wrap;
    width: 100%;
  }
`;

export default Pre;
